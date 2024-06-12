const express = require('express')
const router = express.Router()
const appointmentController = require('../controllers/appointmentController')

router.route('/')
    .post(appointmentController.createNewAppointment)
    .get(appointmentController.getAllAppointments)


router.route('/user/:userId')
    .get(appointmentController.getAppointmentsByUser)


router.route('/:id')
    .delete(appointmentController.deleteAppointment)


module.exports = router
