const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./Config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./Routes/authRoutes");

app.use("/api/auth", authRoutes);

const memberRoutes = require("./Routes/memberRoutes");

app.use("/api/members", memberRoutes);

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("Gym API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});
