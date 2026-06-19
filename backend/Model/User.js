const mongoose = require("mongoose");

const USerschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "trainer", "member"],
      default: "member",
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", USerschema);

module.exports = User;
