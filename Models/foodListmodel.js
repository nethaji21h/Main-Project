
const mongoose = require('mongoose')

const foodList = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Price: {
    type: Number,
    required: true,
  },

  Category: {
    type: String,
    required: true,
  },
  Type: {
    type: String,
    enum: ['Veg', 'Non-Veg'],
    required: true,
  },
  Restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('foodItem', foodList)
