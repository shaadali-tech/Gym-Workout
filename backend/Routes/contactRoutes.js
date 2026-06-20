const express = require("express");

const router = express.Router();

const { sendMessage } = require("../Controller/Contactcontroller");

router.post("/", sendMessage);

module.exports = router;
