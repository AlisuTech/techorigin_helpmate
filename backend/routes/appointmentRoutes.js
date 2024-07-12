const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointmentController')
const verifyToken = require('../middleware/authMiddleware')


router.route('/')
    .post(verifyToken, appointmentController.createNewAppointment)
    .get(verifyToken, appointmentController.getAllAppointments)


router.route('/users/:userId')
    .get(verifyToken, appointmentController.getAppointmentsByUser)


router.route('/:id')
    .delete(verifyToken, appointmentController.deleteAppointment)

module.exports = router
