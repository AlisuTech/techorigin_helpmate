const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');
const Schema = mongoose.Schema;

const serviceProviderSchema = new Schema({
    photo: {
        type: String,
        // required: true
    },
    officeAddress: {
        type: String,
        required: [true, "Your office address is required"]
    },
    price: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: [true, "Your department is required"]
    },
    rating: {
        type: Number,
        // required: true,
        // min: 0,
        // max: 5
    },
    yearsOfExperience: {
        type: Number,
        // required: true
    },
    clientReviews: [{
        type: String
    }],
    meansOfId: {
        type: String,
        // required: true
    },
    validIdFile: {
        type: String,
        // required: true
    },
    certificateFile: {
        type: String,
        // required: true
    }
});

module.exports = BaseUser.discriminator('ServiceProvider', serviceProviderSchema);