// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');

// Create web server
const app = express();

// Use body parser
app.use(bodyParser.json());

// Set up the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

