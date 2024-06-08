const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')


const createNewUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, phoneNumber, email, officeAddress, dateOfBirth, country, stateOfOrigin, password } = req.body

    const requiredFields = ['firstName', 'lastName', 'phoneNumber', 'email', 'officeAddress', 'dateOfBirth', 'country', 'stateOfOrigin', 'password'];

    const missingField = requiredFields.find(field => !req.body[field]);
    if (missingField) {
        return res.status(400).json({ message: `${missingField} is required` });
    }

    const duplicate = await User.findOne({ email }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const userObject = { firstName, email, "password": hashedPwd, lastName, phoneNumber, officeAddress, dateOfBirth, country, stateOfOrigin }

    const user = await User.create(userObject)

    if (user) { 
        res.status(201).json({ message: `New user ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})


module.exports = {
    createNewUser
}