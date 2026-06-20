const express = require("express");

const router = express.Router();

const { getDashboardStats } = require("../Controller/dashboardController");

const protect = require("../middleware/authMiddleware");

router.get("/", protect, getDashboardStats);

module.exports = router;
