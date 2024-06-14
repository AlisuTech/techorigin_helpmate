const User = require('../models/User')
const Appointment = require('../models/appointment');
const ServiceProvider = require("../models/ServiceProvider");
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')


const createNewUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, phoneNumber, email, dateOfBirth, country, stateOfOrigin, password } = req.body

    const requiredFields = ['firstName', 'lastName', 'phoneNumber', 'email', 'dateOfBirth', 'country', 'stateOfOrigin', 'password'];

    const missingField = requiredFields.find(field => !req.body[field]);
    if (missingField) {
        return res.status(400).json({ message: `${missingField} is required` });
    }

    const duplicate = await User.findOne({ email }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate email' })
    }

    const hashedPwd = await bcrypt.hash(password, 10)

    const userObject = { firstName, email, "password": hashedPwd, lastName, phoneNumber, dateOfBirth, country, stateOfOrigin }

    const user = await User.create(userObject)

    if (user) { 
        res.status(201).json({ message: `New user ${email} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
});

const fetchUser = asyncHandler(async(req, res) => {
 const {Email}=req.query
 const user= userSchema.find({"email":Email})
 
 if (user){
    res.status(201).json({ message: `${email} is users email`})
 } else {
    res.query(400).json({message:`invalid user email`})
 }
});

const updateUser = asyncHandler(async(req,res)=>{
    const body=req.body
    const updateModel={
        firstName, 
        lastName,
        address,
        password,

    }
    userSchema.create(updateModel)
})

 if (updateModel){
    res.status(201).json({ message: `updated successfully`})
  } else {
    res.query(400).json({message:`invalid details`})
 }

module.exports = {
    createNewUser,
    fetchUser,
    updateUser,
            
}