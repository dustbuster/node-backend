const express = require('express'); // Ensure this line is present
const app = express();
const { connection } = require('./database');

app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/api/articles', (req, res) => {
  connection.query('SELECT * FROM Articles', (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.status(200).json(results);
  });
});

module.exports = app; // Ensure you export app without calling listen here
