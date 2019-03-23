const express = require('express');
const router = express.Router();

// @Route   GET api/person/
// @desc    Get all persons
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message
  res.send('Hello from persons');
});

// Export the routes of person
module.exports = router;
