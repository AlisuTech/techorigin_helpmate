const User = require('../models/User')
const Appointment = require('../models/Appointment');
const ServiceProvider = require("../models/ServiceProvider");
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt');
const { errorHandler } = require('../utils/error.js');

const createNewUser = asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const requiredFields = ['firstName', 'lastName', 'email', 'password'];

    const missingField = requiredFields.find(field => !req.body[field]);
    if (missingField) {
        return res.status(400).json({ message: `${missingField} is required` });
    }

    try {
        const duplicate = await User.findOne({ email }).lean().exec();

        if (duplicate) {
            return res.status(409).json({ message: 'Duplicate email' });
        }

        const hashedPwd = await bcrypt.hash(password, 10);

        const userObject = { 
            firstName, 
            email, 
            "password": hashedPwd,
            lastName
        };

        const user = await User.create(userObject);

        if (user) {
            res.status(201).json({ message: `New user ${email} created` });
        } else {
            // next(errorHandler(400, "Invalid user data received"))
            res.status(400).json({ message: 'Invalid user data received' });
        }
    } //catch (error) {
        // if (error.code === 11000) { // Duplicate key error
        //     res.status(409).json({ message: 'Duplicate email' });
        // } else {
        //     res.status(500).json({ message: 'Something went wrong', error: error.message });
        // }
        catch (error) {
            next(error)
    }
});


const fetchUser = asyncHandler(async(req, res) => {
 const {Email}=req.query
 const user= userSchema.find({"email":Email})
 
 if (user){
    res.status(201).json({ message: `${email} is users email`})
 } else {
    res.status(400).json({message:`invalid user email`})
 }
});

const updateUser = asyncHandler(async(req,res)=>{

    const { firstName, lastName, address, password } = req.body;
    const updateModel = { firstName, lastName, address, password };
    
    const user = await userSchema.create(updateModel).lean().exec()
})

module.exports = {
    createNewUser,
    fetchUser,
    updateUser,
            
}