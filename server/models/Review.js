const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
  {
    reviewText: {
      type: String,
      required: 'Please add your review!',
      minlength: 1,
      maxlength: 5000
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Review = model('Review', reviewSchema);

module.exports = Review;