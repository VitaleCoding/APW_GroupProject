const unitedStatesQuizQuestions = require('./UnitedStatesQuestions');
const unitedStatesQuizAnswers = require('./UnitedStatesAnswers');

// Function to get questions of a specific difficulty
function getQuestionsByDifficulty(questions, difficulty) {
    return questions.filter(question => question.difficulty === difficulty);
}

// Function to create a quiz with a mix of difficulties
function createQuiz(questions, answers, numberOfQuestions) {
    const quiz = [];
    const difficulties = [1, 2, 3, 4, 5]; // Assuming difficulties range from 1 to 5
    const questionsPerDifficulty = Math.floor(numberOfQuestions / difficulties.length);

    difficulties.forEach(difficulty => {
        const questionsOfDifficulty = getQuestionsByDifficulty(questions, difficulty);
        const selectedQuestions = questionsOfDifficulty.slice(0, questionsPerDifficulty);
        quiz.push(...selectedQuestions);
    });

    // Add additional random questions if needed to reach numberOfQuestions
    let remainingQuestions = numberOfQuestions - quiz.length;
    if (remainingQuestions > 0) {
        const remainingQuestionsPool = questions.filter(question => !quiz.includes(question));
        for (let i = 0; i < remainingQuestions; i++) {
            const randomQuestion = remainingQuestionsPool[Math.floor(Math.random() * remainingQuestionsPool.length)];
            quiz.push(randomQuestion);
            remainingQuestionsPool.splice(remainingQuestionsPool.indexOf(randomQuestion), 1);
        }
    }

    return quiz;
}

// Example usage:
const numberOfQuestionsInQuiz = 15; // Change this number as needed
const quiz = createQuiz(unitedStatesQuizQuestions, unitedStatesQuizAnswers, numberOfQuestionsInQuiz);

// Function to print a quiz
function printQuiz(quiz) {
    quiz.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.question}`);
        question.options.forEach((option, optionIndex) => {
            console.log(`  ${optionIndex + 1}. ${option}`);
        });
        console.log(); // Add an empty line for readability
    });
}

printQuiz(quiz);