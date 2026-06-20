const express = require("express");

const router = express.Router();

const { sendMessage } = require("../Controller/ContactController");

router.post("/", sendMessage);

module.exports = router;
