const db = require("./database_manager.js");
let user_collection;

const user_manager = {};

// Make sure to call this to retrieve user_collection
// TODO: See if this can be performed automatically
user_manager.start = async function() {
    let database = await db.get("project");
    user_collection = await database.collection("users");
}

// Internal wrapper function for user documents. Do not call directly
// Returns user object that has functions for handling quiz data
let format_user_doc = async function(user_doc) {
    user = {}
    user.document = user_doc
    
    // Returns the amount of quizzes of a certain topic taken. Leave empty for no filter
    user.get_taken = function(topic) {
        let count = 0;

        for (let quiz of user.document.quizResults) {
            if (!topic || topic == quiz.topic) count++;
        }

        return count;
    }

    // Returns the average score of quizzes of a certain topic taken. Leave empty for no filter
    user.get_average_score = function(topic) {
        let total_score = 0;

        for (let quiz of user.document.quizResults) {
            if (!topic || topic == quiz.topic) total_score += quiz.score;
        }

        return total_score / get_taken(topic);
    }

    // Returns all quizzes
    user.get_quizzes = function() {
        return user.document.quizResults;
    }

    // Add a quiz to user database
    user.add_quiz = async function(topic, score) {
        let new_quiz = {
            "topic": topic,
            "score": score,
        };

        return user_collection.updateOne({_id: user.document._id}, {
            $push: {
                quizResults: new_quiz
            }
        });
    }

    return user;
}

// Attempt to retrieve user using username and password. Errors if either are incorrect/missing
user_manager.authenticate_user = async function(username, password) {
    let user = await user_collection.findOne({"username": username});

    if (!user) throw new Error("User not found");
    if (user.password != password) throw new Error("Password incorrect");

    return format_user_doc(user);
}

// Create a new user on the database
user_manager.create_user = async function(username, password) {
    let result = user_collection.insertOne({
        "username": username,
        "password": password,
        "quizResults": []
    });

    return result;
}

// Return user. If no user exists, create new user and return it instead
user_manager.register_user = async function(username, password) {
    // Attempt to find user
    let user = null;
    
    try {
        user = await user_manager.authenticate_user(username, password);
    }
    catch (e) {
        // If user not found, create a new user
        // Otherwise rethrow error created
        console.log(e)
        if (e.message == "User not found") {
            console.log(`Creating new user ${username}`)
            user = await user_manager.create_user(username, password);
        }
        else {
            throw e;
        }
    }

    return user;
}

// Returns leaderboard data in the format of:
// Topic:
//      Tests Taken / Average Score:
//          {Username, Value}
// For example, leaderboard_data.us.taken gets the list of users and the total US tests they've taken
// First username would be retrieved with leaderboard_data.us.taken[0].user
// Note: This is returned **unsorted** as of this moment
user_manager.get_leaderboard_data = async function() {
    let leaderboard_data = {
        us: {
            taken: [

            ],
            average_score: [

            ]
        },

        europe: {
            taken: [

            ],
            average_score: [
                
            ]
        },

        china: {
            taken: [

            ],
            average_score: [
                
            ]
        },

        all: {
            taken: [

            ],
            average_score: [
                
            ]
        }
    }

    let db_cursor = await user_collection.find({});
    await db_cursor.forEach(user_doc => {
        let quizzes = user_doc.quizResults;
        let user_taken = {us: 0, europe: 0, china: 0};
        let user_total_score = {us: 0.0, europe: 0.0, china: 0.0};

        quizzes.forEach(quiz => {
            switch (quiz.topic) {
                case "US":
                    user_taken.us += 1;
                    user_total_score.us += quiz.score;
                    break;
                case "China":
                    user_taken.china += 1;
                    user_total_score.china += quiz.score;
                    break;
                case "EU":
                    user_taken.europe += 1;
                    user_total_score.europe += quiz.score;
                    break;
            }
        });

        leaderboard_data.us.taken.push({user: user_doc.username, value: user_taken.us});
        leaderboard_data.us.average_score.push({user: user_doc.username, value: user_total_score.us / user_taken.us});

        leaderboard_data.europe.taken.push({user: user_doc.username, value: user_taken.europe});
        leaderboard_data.europe.average_score.push({user: user_doc.username, value: user_total_score.europe / user_taken.europe});

        leaderboard_data.china.taken.push({user: user_doc.username, value: user_taken.china});
        leaderboard_data.china.average_score.push({user: user_doc.username, value: user_total_score.china / user_taken.china});

        leaderboard_data.all.taken.push({user: user_doc.username, value: user_taken.us + user_taken.china + user_taken.europe});
        leaderboard_data.all.average_score.push({user: user_doc.username, value: (user_total_score.us + user_total_score.europe + user_total_score.china) / (user_taken.us + user_taken.europe + user_taken.china)});
    });

    return leaderboard_data;
}

module.exports = user_manager;