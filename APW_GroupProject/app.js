const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the quiz selection page
app.get('/', (req, res) => {
  res.render('index'); // Render the Pug file for the quiz selection page (index.pug)
});

// Handle submission of the quiz selection form
app.post('/start-quiz', (req, res) => {
  const selectedQuiz = req.body.quiz;
  
  // Redirect to the corresponding quiz page based on the selection
  switch (selectedQuiz) {
    case 'unitedStates':
      res.redirect('/quiz/unitedStates');
      break;
    case 'europeanHistory':
      res.redirect('/quiz/europeanHistory');
      break;
    case 'chineseHistory':
      res.redirect('/quiz/chineseHistory');
      break;
    default:
      res.status(400).send('Invalid quiz selection');
  }
});

// Serve the United States Quiz page
app.get('/quiz/unitedStates', (req, res) => {
  res.render('unitedStatesQuiz'); // Render the Pug file for the United States Quiz
});

// Serve the European History Quiz page
app.get('/quiz/europeanHistory', (req, res) => {
  res.render('europeanHistoryQuiz'); // Render the Pug file for the European History Quiz
});

// Serve the Chinese History Quiz page
app.get('/quiz/chineseHistory', (req, res) => {
  res.render('chineseHistoryQuiz'); // Render the Pug file for the Chinese History Quiz
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
