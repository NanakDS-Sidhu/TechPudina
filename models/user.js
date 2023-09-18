// const mongoose = require('mongoose');
import mongoose from "mongoose";

// Define a user schema with common fields for all users
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
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
    servicetype: {
        type: String, // This field is specific to Service Providers
        required: function () {
            return this.role === 'service_provider'; // Only required for Service Providers
        },
        enum: ['advocates', 'arbitrators', 'mediators', 'notaries', 'document_writers'],
    },
    subtype: {
        type: String, // This field is specific to Service Providers and advocates
        required: function () {
            return this.servicetype === 'advocates'; // Only required for Service Providers
        },
        enum: [
            "Criminal Defense Lawyers",
            "Civil Lawyers",
            "Corporate Lawyers",
            "Family Lawyers",
            "Property Lawyers",
            "Environmental Lawyers",
            "Tax Lawyers",
            "Labor and Employment Lawyers",
            "Intellectual Property (IP) Lawyers",
            "Constitutional Lawyers",
            "Immigration Lawyers",
            "Human Rights Lawyers",
            "Banking and Finance Lawyers",
            "Medical Malpractice Lawyers",
            "Consumer Protection Lawyers",
            "International Lawyers",
            "Admiralty and Maritime Lawyers",
        ],
    },
    description: {
        type: String, // Description field for both Clients and Service Providers
    },
    practisecourts: {
        type: [String], // This field is specific to Service Providers and advocates
        required: function () {
            return this.servicetype === 'advocates'; // Only required for Service Providers
        },
    },
    rating: {
        type: Number, // This field is specific to Service Providers
        default: 0,
    },
    location: {
        type: String, // This field is specific to Service Providers
    },
    experienceInYears: {
        type: Number, // Experience in years field for Service Providers
    },
    priceInRupees: {
        type: Number, // Price in rupees field for Service Providers
    },
    // Add other fields unique to Service Providers here
});

// Create a user model based on the userSchema
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
