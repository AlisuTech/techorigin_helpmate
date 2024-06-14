const Appointment = require('../models/appointment');
const User = require('../models/User');
const ServiceProvider = require('../models/ServiceProvider');
const asyncHandler = require('express-async-handler');

// @desc Get all appointments
// @route GET /appointments
// @access Private
const getAllAppointments = asyncHandler(async (req, res) => {
    const appointments = await Appointment.find().populate('serviceProvider').lean();

    if (!appointments?.length) {
        return res.status(400).json({ message: 'No appointments found' });
    }

    res.json(appointments);
});

// @desc Create a new appointment
// @route POST /appointments
// @access Private
const createNewAppointment = asyncHandler(async (req, res) => {
    const { userId, date, time, department, serviceProvider } = req.body;

    // Confirm data
    if (!userId || !date || !time || !department || !serviceProvider) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the service provider exists
    const providerExists = await ServiceProvider.findById(serviceProvider).lean().exec();
    if (!providerExists) {
        return res.status(400).json({ message: 'Service provider not found' });
    }

    // Create the appointment
    const appointmentObject = { date, time, department, serviceProvider };
    const appointment = await Appointment.create(appointmentObject);

    if (!appointment) {
        return res.status(400).json({ message: 'Invalid appointment data received' });
    }

    // Find the user associated with the appointment
    const user = await User.findById(userId);

    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    // Update the user's appointments list
    user.appointments.push(appointment._id);

    // Save the updated user
    await user.save();

    res.status(201).json({ message: 'New appointment created', appointment });
});

// @desc Get appointments for a specific user
// @route GET /appointments/user/:userId
// @access Private
const getAppointmentsByUser = asyncHandler(async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId).lean().exec();
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const appointments = await Appointment.find({ user: userId }).populate('serviceProvider').lean();

    if (!appointments?.length) {
        return res.status(400).json({ message: 'No appointments found for this user' });
    }

    res.json(appointments);
});

// @desc Delete an appointment
// @route DELETE /appointments/:id
// @access Private
const deleteAppointment = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const appointment = await Appointment.findById(id).exec();

    if (!appointment) {
        return res.status(400).json({ message: 'Appointment not found' });
    }

    const result = await appointment.deleteOne();

    res.json({ message: `Appointment ${result._id} deleted` });
});

module.exports = {
    getAllAppointments,
    createNewAppointment,
    getAppointmentsByUser,
    deleteAppointment
};
