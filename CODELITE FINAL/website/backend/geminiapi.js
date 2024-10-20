const axios = require('axios');

class DarkPatternClassifier {
  async classifyDarkPattern(content, website, darkPatterns) {
    const prompt = `
      Based on the content present on the website, which may or may not be malicious, 
      classify it into one of the dark patterns and explain why, and name the type 
      of dark pattern from the list of dark patterns:
      <content>
      ${JSON.stringify(content)}
      </content>
      <website>
      ${website}
      </website>
      <dark_pattern>
      ${JSON.stringify(darkPatterns)}
      </dark_pattern>
    `;

    try {
      const response = await axios.post('https://api.google.com/v1/gemini/pro', {
        prompt: prompt,
        temperature: 1,
        model: "gemini-pro"
      }, {
        headers: {
          'Authorization': 'Bearer YOUR_API_KEY', // Ensure you have the correct API key
          'Content-Type': 'application/json'
        }
      });

      return response.data; // Assuming the response contains the classification
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Error request:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error message:', error.message);
      }
      throw new Error('Failed to classify dark pattern');
    }
  }
}

module.exports = DarkPatternClassifier;
