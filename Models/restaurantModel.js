const express =require ('express')
const mongoose = require('mongoose');

const restaurantList = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
    },
    Address: {
        type: String,
        required: true,
    },
    ContactNumber: {
        type: String,
        required: true,
    },
    Location: {
        type: String,
        required: true,
        trim: true
      },
    Rating: {
        type: Number,
        default: 0,
    },
    Fooditems: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food', // link to the food items
        }
    ],
}, { timestamps: true });


 module.exports = mongoose.model('Restaurant',restaurantList)
