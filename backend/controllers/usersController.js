const User = require('../models/User')
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
    updateModel={
        accountName:body.accountName.accountDetail,
        accountNumber:body.accountNumber.accountDetail,
        bankName:body.bankName.accountDetail,
    }
    userSchema.create(updateModel)
})

<<<<<<< HEAD
if (user){
    res.status(201).json({ message: `${accountDetail} updated successfully`})
 } else {
    res.query(400).json({message:`invalid accoun details`})
 }

module.exports = {
    createNewUser,
    fetchUser,
    updateUser
=======
// @desc Get all users
// @route GET /users
// @access Private
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select('-password -confirmPassword').lean();

    if (!users?.length) {
        return res.status(400).json({ message: 'No users found' });
    }

    res.json(users);
});


module.exports = {
    createNewUser,
    getAllUsers
>>>>>>> feat/isUser_or_sp
}