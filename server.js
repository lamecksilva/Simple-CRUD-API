// Import the packages
const express = require('express');
const mongoose = require('mongoose');

// Create an instance for express
const app = express();

// Get the mongoURI for database
const db = require('./config/keys').mongoURI;

// Connecting with database
mongoose
  .connect(db, { useNewUrlParser: true })
  // If all run ok, console log the message
  .then(() => console.log('MongoDB connected'))
  // For console log any error
  .catch(err => console.log(err));

// Port declaration
const port = process.env.PORT || 5000;
// Init the express.js server
app.listen(port, () => console.log(`Server running on ${port}`));
