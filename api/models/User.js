const mongoose = require("mongoose");

// UserSchema
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// User Model
const UserModel = mongoose.model("User", UserSchema);

// export
module.exports = UserModel;
