const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");

// Register user
const registerUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = await UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPass,
      gender: req.body.gender,
      dateOfBirth: req.body.dateOfBirth,
    });

    const userInfo = await newUser.save();

    return res.status(201).json(userInfo);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// login user
const loginUser = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validatePass = await bcrypt.compare(req.body.password, user.password);

    if (!validatePass) {
      return res.status(400).json("Wrong credentials!");
    }

    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
