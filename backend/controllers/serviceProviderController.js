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
    price,
    meansOfId,
    yearsOfExperience,
    photo,
    
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
    "price",
    "meansOfId",
    "yearsOfExperience",
    "photo",
  ];

  const missingField = requiredFields.find((field) => !req.body[field]);
  if (missingField) {
    return res.status(400).json({ message: `${missingField} is required` });
  }

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
  };

  const serviceProvider = await ServiceProvider.create(userObject);

  if (serviceProvider) {
    res.status(201).json({ message: `New user ${email} created` });
  } else {
    res.status(400).json({ message: "Invalid user data received" });
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
});

module.exports = {
  createNewServiceProvider,
  getAllServiceProviders,
};
