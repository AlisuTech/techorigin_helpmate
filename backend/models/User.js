const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String
    },
    officeAddress: {
        type: String
    },
    dateOfBirth: {
        type: Number
    },
    country: {
        type: String
    },
    stateOfOrigin: {
        type: String
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);