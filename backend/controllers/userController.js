const asyncHandler = require("express-async-handler");
const User = require("./../models/userModel");
// @desc register new user
// @route GET /api/users
// @access Public
const userRegister = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "register user" });
});

// @desc register new user
// @route GET /api/users/login
// @access Public
const userLogin = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "login user" });
});

// @desc register new user
// @route GET /api/users/me
// @access Private
const userInfo = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get user info" });
});

module.exports = {
  userRegister,
  userLogin,
  userInfo,
};
