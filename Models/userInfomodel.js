
const express = require('express')
const mongoose = require('mongoose');

const userInfoschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  confirmationPassword: {
    type: String,
    required: true
  },
  MobileNumber: {
    type: String
  },

}, {
  timestamps: true
});



module.exports = mongoose.model('userInfo', userInfoschema)

