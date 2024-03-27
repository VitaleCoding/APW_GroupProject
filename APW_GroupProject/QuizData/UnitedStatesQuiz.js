const unitedStatesQuizQuestions = require('./UnitedStatesQuestions');
const unitedStatesQuizAnswers = require('./UnitedStatesAnswers');

// Function to get questions of a specific difficulty
function getQuestionsByDifficulty(questions, difficulty) {
    return questions.filter(question => question.difficulty === difficulty);
}

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to create a quiz with a mix of difficulties
function createQuiz(questions, numberOfQuestions) {
    // Shuffle the questions array to ensure randomness
    const shuffledQuestions = shuffleArray(questions);

    const quiz = [];
    const difficulties = [1, 2, 3, 4, 5]; // Assuming difficulties range from 1 to 5
    const questionsPerDifficulty = Math.floor(numberOfQuestions / difficulties.length);

    difficulties.forEach(difficulty => {
        const questionsOfDifficulty = getQuestionsByDifficulty(shuffledQuestions, difficulty);
        const selectedQuestions = questionsOfDifficulty.slice(0, questionsPerDifficulty);
        quiz.push(...selectedQuestions);
    });

    // Shuffle the quiz array again to mix questions from different difficulties
    return shuffleArray(quiz);
}

// Function to display the quiz
function displayQuiz(quiz) {
    quiz.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.question}`);
        console.log("Options:");
        question.options.forEach((option, idx) => {
            console.log(`${idx + 1}. ${option}`);
        });
        console.log();
    });
}

// Number of questions in the quiz
const numberOfQuestions = 10; // Adjust as needed

// Generate the quiz
const quiz = createQuiz(unitedStatesQuizQuestions, numberOfQuestions);

// Display the quiz
displayQuiz(quiz);
