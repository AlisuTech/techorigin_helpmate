const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BaseUser = require('./BaseUser');

const userSchema = new Schema({
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
});

module.exports = BaseUser.discriminator('User', userSchema);