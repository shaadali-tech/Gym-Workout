const express = require("express");

const router = express.Router();

const { registerUser, loginUser } = require("../Controller/authController");

router.post("/register", registerUser);

router.post("/login", loginUser);
const protect = require("../middleware/authMiddleware");

router.get("/profile", protect, (req, res) => {
  res.status(200).json(req.user);
});
module.exports = router;
