const express = require("express");

const router = express.Router();

const protect = require("../Middleware/authMiddleware");

const {
  addMember,
  getMembers,
  getMember,
  updateMember,
  deleteMember,
  recentMembers,
} = require("../Controller/membercontroller");
router.get("/", protect, getMembers);
router.get("/recent", protect, recentMembers);
router.get("/:id", protect, getMember);
router.post("/", protect, addMember);
router.put("/:id", protect, updateMember);
router.delete("/:id", protect, deleteMember);
module.exports = router;
