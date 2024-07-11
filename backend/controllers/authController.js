const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/User');

// @desc Login user
// @route POST /auth/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = await User.findOne({ email }).exec();
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid Password' });
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_IN_MIN });
  const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_IN_DAY });

  user.refreshToken = refreshToken;
  await user.save();

  res.json({ accessToken, refreshToken, user: {id: user._id, email:user.email} });
});

// @desc Refresh token
// @route POST /auth/refresh
// @access Public
const refreshToken = asyncHandler(async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }


  const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
  const user = await User.findById(decoded.userId).exec();
  if (!user || user.refreshToken !== token) {
    return res.status(403).json({ message: 'Invalid refresh token' });
  }

  const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.EXPIRES_IN_MIN });
  res.json({ accessToken });

});

// @desc Logout user
// @route POST /auth/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Refresh token is required' });
  }

  const user = await User.findOneAndUpdate({ refreshToken: token }, { refreshToken: null }).exec();
  if (!user) {
    return res.status(400).json({ message: 'Invalid refresh token' });
  }

  res.json({ message: 'Logged out successfully' });
});

module.exports = {
  loginUser,
  refreshToken,
  logoutUser,
};