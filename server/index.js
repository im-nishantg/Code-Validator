const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { runTests } = require('./testRunner');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json("Hello there");
});

app.post('/runcode', (req, res) => {

  const code = req.body.code;
  try {
      const testResults = runTests(code);
      res.json({ tests: testResults });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
