const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
  },

  startDate: {
    type: Date,
    required: true,
  },

  endDate: {
    type: Date,
    required: true,
  },

  budget: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Trip", tripSchema);
