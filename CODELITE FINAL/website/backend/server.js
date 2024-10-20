const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const DarkPatternClassifier = require('./geminiapi'); // Adjust the path as necessary

const app = express();
const PORT = 3000; // Changed port to 3000

app.use(cors()); // Use the cors middleware to enable CORS
app.use(bodyParser.json());

app.post('/api/classify', async (req, res) => {
  const { website, defects } = req.body;
  const classifier = new DarkPatternClassifier();

  try {
    const result = await classifier.classifyDarkPattern(defects, website);
    res.json(result); // Send the API response to the frontend
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to classify dark patterns' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`); // Updated port in the log
});
