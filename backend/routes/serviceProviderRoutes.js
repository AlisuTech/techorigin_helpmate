const express = require('express')
const router = express.Router()
const serviceProviderController = require('../controllers/serviceProviderController')

router.route('/')
    .post(serviceProviderController.createNewServiceProvider)
    .get(serviceProviderController.getAllServiceProviders)




module.exports = router
