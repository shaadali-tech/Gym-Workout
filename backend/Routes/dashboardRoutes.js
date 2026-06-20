const express = require("express");

const router = express.Router();

const { getDashboardStats } = require("../Controller/dashboardcontroller");

const protect = require("../Middleware/authMiddleware");

router.get("/", protect, getDashboardStats);

module.exports = router;
