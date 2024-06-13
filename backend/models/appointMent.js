const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    serviceProvider: {
        type: Schema.Types.ObjectId,
        ref: 'ServiceProvider',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);
