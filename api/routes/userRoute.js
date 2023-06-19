const express = require("express");
const router = express.Router();
const { updateUser } = require("../controllers/userController");

// update user
router.put("/:id", updateUser);

module.exports = router;
