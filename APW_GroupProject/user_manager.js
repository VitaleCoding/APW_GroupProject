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
    try {
        let user = await user_collection.findOne({"username": username});

        if (!user) throw new Error("User not found");
        if (user.password != password) throw new Error("Password incorrect");

        return format_user_doc(user);
    }
    catch (e) {
        console.log(e.message);
    }
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

module.exports = user_manager;