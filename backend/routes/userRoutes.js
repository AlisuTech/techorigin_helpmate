const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.route('/')
    .post(usersController.createNewUser)
<<<<<<< HEAD
    .get(usersController.fetchUser)
    .put(usersController.updateUser)
=======
    .get(usersController.getAllUsers)

>>>>>>> feat/isUser_or_sp



module.exports = router
