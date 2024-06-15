const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const options = { discriminatorKey: 'role', timestamps: true };

const baseUserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "Your first name is required"]
    },
    lastName: {
        type: String,
        required: [true, "Your last name is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "Your phone Number is not correct"]
    },
    email: {
        type: String,
        required: [true, "Your email is required"],
        unique: true,
        lowercase: true,
        trim: true 
    },
    dateOfBirth: {
        type: Date,
        required: [true, "Your age must be 16 and above"]
    },
    country: {
        type: String,
        required: [true, "Your country is required"]
    },
    stateOfOrigin: {
        type: String,
        required: [true, "Your State is required"]
    },
    password: {
        type: String,
        required: true
    },
}, options);

module.exports = mongoose.model('BaseUser', baseUserSchema);
