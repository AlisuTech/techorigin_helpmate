const ServiceProvider = require("../models/ServiceProviderr");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const createNewServiceProvider = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    department,
    email,
    password
  } = req.body;

  const requiredFields = [
    "firstName",
    "lastName",
    "department",
    "email",
    "password",
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
      department,
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
    .select("-password")
    .lean();

  if (!serviceProviders?.length) {
    return res.status(200).json([]);
  }

  res.status(200).json(serviceProviders);
});

module.exports = {
  createNewServiceProvider,
  getAllServiceProviders,
  
};
