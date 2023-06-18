const UserModel = require("../models/User");
const CryptoJS = require("crypto-js");

// Register user
const registerUser = async (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    gender: req.body.gender,
    dateOfBirth: req.body.dateOfBirth,
  });

  try {
    const savedUser = await newUser.save();

    return res.status(201).json(savedUser);
  } catch (err) {
    return res.status(500).json({ err, msg: "Something went wrong!" });
  }
};

module.exports = {
  registerUser,
};
