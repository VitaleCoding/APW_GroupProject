const db = require("./database_manager.js");
let user_collection;

const user_manager = {};

user_manager.start = async function() {
    let database = await db.get("project");
    user_collection = await database.collection("users");
}

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

let format_user_doc = async function(user_doc) {
    user = {}
    user.document = user_doc
    
    user.get_taken = function(topic) {
        let count = 0;

        for (let quiz of user.document.quizResults) {
            if (!topic || topic == quiz.topic) count++;
        }

        return count;
    }

    user.get_average_score = function(topic) {
        let total_score = 0;

        for (let quiz of user.document.quizResults) {
            if (!topic || topic == quiz.topic) total_score += quiz.score;
        }

        return total_score / get_taken(topic);
    }

    return user;
}

module.exports = user_manager;