// models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: String,
  codeSnippet: String,
  feedback: String,
  timeStamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Review', reviewSchema);
