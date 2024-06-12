const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.route('/')
    .post(usersController.createNewUser)
    .get(usersController.fetchUser)
    .put(usersController.updateUser)



module.exports = router
