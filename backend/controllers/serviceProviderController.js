const ServiceProvider = require("../models/ServiceProvider");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const createNewServiceProvider = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    dateOfBirth,
    country,
    stateOfOrigin,
    password,
    officeAddress,
    price
    
  } = req.body;

  const requiredFields = [
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
    "dateOfBirth",
    "country",
    "stateOfOrigin",
    "password",
    "officeAddress",
    "price"
  ];

  const missingField = requiredFields.find((field) => !req.body[field]);
  if (missingField) {
    return res.status(400).json({ message: `${missingField} is required` });
  }

  try {
    const duplicate = await ServiceProvider.findOne({ email }).lean().exec();

    if (duplicate) {
      return res.status(409).json({ message: "Duplicate email" });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const userObject = {
      firstName,
      email,
      password: hashedPwd,
      lastName,
      phoneNumber,
      dateOfBirth,
      country,
      stateOfOrigin,
      officeAddress,
      price
    };

    const serviceProvider = await ServiceProvider.create(userObject);

    if (serviceProvider) {
      res.status(201).json({ message: `New user ${email} created` });
    } else {
      res.status(400).json({ message: "Invalid user data received" });
    }
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).json({ message: 'Duplicate email' });
    } else {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
  }
});

// @desc Get all serviceProviders
// @route GET /serviceProviders
// @access Private
const getAllServiceProviders = asyncHandler(async (req, res) => {
  const serviceProviders = await ServiceProvider.find()
    .select("-password -confirmPassword")
    .lean();

  if (!serviceProviders?.length) {
    return res.status(400).json({ message: "No serviceProviders found" });
  }

  res.json(serviceProviders);



// const loginserviceprovider = asyncHandler(async(req, res)=>{
 
//   const {EMAIL, PASSWORD}=req.query
//   const serviceProvider = await serviceProviderSchema.find0ne({$and:[{"email":EMAIL},{password:PASSWORD}]})
//   if (serviceProvider!==null){
//     res.send(serviceProvider)
//   } else {
//     res.status(400)
//   }
// })


});

module.exports = {
  createNewServiceProvider,
  getAllServiceProviders,
  
};
