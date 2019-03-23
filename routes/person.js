const express = require('express');
const router = express.Router();

const Person = require('../models/Person');

// @Route   GET api/person/
// @desc    Get all persons
// @access  Public
router.get('/', (req, res) => {
  // Sending html in response with message
  // res.send('Hello from persons');

  // Query all documents in db
  Person.find()
    .then(persons => {
      // Returning documents to client
      return res.json(persons);
    })
    .catch(error => {
      // Error handling
      return res.status(500).json(error);
    });
});

// @Route   POST api/person/new
// @desc    Creating a new person
// @access  Public
router.post('/new', (req, res) => {
  // Get name and age from body request
  const { name, age } = req.body;

  // Creating a new Person (Model)
  const newPerson = new Person({
    name,
    age
  });

  // Saving the new Person in the db
  newPerson
    .save()
    .then(person => res.json(person))
    .catch(error => res.status(500).json(error));
});

// @Route   PUT api/person/update/:id
// @desc    Update a person
// @access  Public
router.put('/update/:id', (req, res) => {
  const { name, age } = req.body;

  Person.findOneAndUpdate(
    { _id: { $eq: req.params.id } }, // Find one id equals to id in params
    { name, age }, // data to be updated
    { new: true } // to mongoose returns the updated document
  )
    .then(newPerson => {
      return res.json(newPerson);
    })
    .catch(error => {
      return res.status(500).json(error);
    });
});

// @Route   DELETE api/person/:id
// @desc    Delete a person
// @access  Public
router.delete('/:id', (req, res) => {
  // Searching for a person and deleting
  Person.findOneAndDelete({ _id: req.params.id })
    .then(person => {
      // If the id of person not exists, returns a error
      if (!person) {
        res.status(404).json({ msg: 'There is no user for this ID' });
      }

      return res.json(person);
    })
    .catch(error => {
      // Handling the error
      return res.status(500).json(error);
    });
});

// Export the routes of person
module.exports = router;
