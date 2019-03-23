const mongoose = require('mongoose');
const { Schema } = mongoose;

// Creating a new Schema for Person
const PersonSchema = new Schema({
  // Here, we set the names of properties
  name: {
    // The type
    type: String,
    // And if is required or not
    required: true
  },
  age: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  }
});

// Here, we export the model of persons
module.exports = mongoose.model('persons', PersonSchema);
