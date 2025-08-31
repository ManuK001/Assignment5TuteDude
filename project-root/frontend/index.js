const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <input name="username" placeholder="Enter username" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', async (req, res) => {
  try {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.send(`Response from Flask: ${response.data}`);
  } catch (err) {
    res.send('Error connecting to Flask backend');
  }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));