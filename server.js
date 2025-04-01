const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 9090;

app.use(bodyParser.json());
app.get('/questions/:topic', (req, res) => {
	
  	const topic = req.params.topic;
  	const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'));
  if (questions[topic]) {
    res.json(questions[topic].map(q => ({ id: q.id, question: q.question, options: q.options })));
  } else {
    res.status(404).json({ error: "Topic not found." });
  }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
  
app.post('/submit', (req, res) => {
  const { topic, answers } = req.body;
  const questions = JSON.parse(fs.readFileSync('questions.json', 'utf-8'))[topic];
  if (!questions) {
    return res.status(404).json({ error: "Topic not found." });
  }

  let score = 0;
  answers.forEach((ans, index) => {
    if (questions[index].answer === ans) {
      score++;
    }
  });

  res.json({ score });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});