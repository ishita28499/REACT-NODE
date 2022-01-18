const mongoose = require('mongoose');

const Book = mongoose.Schema({
  ISBN: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  isInStock: {type: Boolean, required: true},
  edition: Number,
  printDate: Date,
});

module.exports = mongoose.model('Book', Book);
