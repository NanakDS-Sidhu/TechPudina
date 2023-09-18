// const mongoose = require('mongoose');
import mongoose from "mongoose";

// Define a user schema with common fields for all users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ['client', 'service_provider'],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other common fields here
  type: {
    type: String, // This field is specific to Service Providers
    required: function () {
      return this.role === 'service_provider'; // Only required for Service Providers
    },
  },
  rating: {
    type: Number, // This field is specific to Service Providers
    default: 0,
  },
  location: {
    type: String, // This field is specific to Service Providers
  },
  // Add other fields unique to Service Providers here
});

// Create a user model based on the userSchema
const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports = User;
