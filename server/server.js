const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// CORS setup
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/trips", require("./routes/tripRoutes"));

// Health check
app.get("/", (req, res) => {
  res.send("Traveloop API is running...");
});

// Error handler (optional but good)
app.use(require("./middleware/errorHandler"));

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB Connected");
});
