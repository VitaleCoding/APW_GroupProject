//Samuel Vitale
const readline = require('readline');

// Fisher-Yates (Knuth) Shuffle algorithm
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle
    while (0 !== currentIndex) {

        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swap it with the current element
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// Importing the quiz data
const chinaQuizQuestions = require('./ChinaQuestions');

// Function to start the quiz
function startQuiz() {
    console.log('Welcome to the Chinese History Quiz!\n');

    // Initialize score
    let score = 0;

    // Object to store questions by difficulty level
    const questionsByDifficulty = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: []
    };

    // Group questions by difficulty level
    chinaQuizQuestions.forEach(question => {
        questionsByDifficulty[question.difficulty].push(question);
    });

    // Ensure we have enough questions for each difficulty level
    const questionsPerDifficulty = {
        1: 4,
        2: 4,
        3: 4,
        4: 4,
        5: 4
    };

    // Select questions from each difficulty level
    const selectedQuestions = [];
    Object.keys(questionsByDifficulty).forEach(difficulty => {
        const numQuestions = questionsPerDifficulty[difficulty];
        const questions = shuffle(questionsByDifficulty[difficulty]).slice(0, numQuestions);
        selectedQuestions.push(...questions);
    });

    // Shuffle all selected questions
    const shuffledQuestions = shuffle(selectedQuestions);

    // Create readline interface
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // Iterate through each question
    let questionIndex = 0;
    function askQuestion() {
        if (questionIndex < shuffledQuestions.length) {
            const question = shuffledQuestions[questionIndex];
            console.log(`Question ${questionIndex + 1}: ${question.question}`);
            console.log('Options:');
            const shuffledOptions = shuffle(question.answers);
            shuffledOptions.forEach((option, optionIndex) => {
                console.log(`${optionIndex + 1}. ${option.text}`);
            });

            // Prompt user for input
            rl.question(`Enter your answer (1-${shuffledOptions.length}): `, userInput => {
                // Validate input
                const userChoice = parseInt(userInput);
                if (isNaN(userChoice) || userChoice < 1 || userChoice > shuffledOptions.length) {
                    console.log('Invalid input. Please enter a number between 1 and ' + shuffledOptions.length + '.\n');
                    askQuestion();
                    return;
                }

                // Check if the selected option is correct
                const selectedOption = shuffledOptions[userChoice - 1];
                if (selectedOption.correct) {
                    console.log('Correct!\n');
                    score++;
                } else {
                    console.log('Incorrect. The correct answer is: ' + shuffledOptions.find(opt => opt.correct).text + '\n');
                }

                // Move to the next question
                questionIndex++;
                askQuestion();
            });
        } else {
            // Close the readline interface
            rl.close();

            // Display final score
            console.log(`Quiz completed! Your final score is: ${score}/${shuffledQuestions.length}`);
        }
    }

    // Start asking questions
    askQuestion();
}

// Start the quiz
startQuiz();
