const Trip = require("../models/Trip");

// =========================
// Create Trip
// =========================
exports.createTrip = async (req, res, next) => {
  try {
    const { destination, startDate, endDate, budget } = req.body;

    const trip = await Trip.create({
      destination,
      startDate,
      endDate,
      budget
    });

    res.status(201).json({
      success: true,
      trip
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// Get All Trips
// =========================
exports.getTrips = async (req, res, next) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: trips.length,
      trips
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// Get Single Trip
// =========================
exports.getTripById = async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found"
      });
    }

    res.status(200).json({
      success: true,
      trip
    });
  } catch (error) {
    next(error);
  }
};

// =========================
// Delete Trip
// =========================
exports.deleteTrip = async (req, res, next) => {
  try {
    const trip = await Trip.findById(req.params.id);

    if (!trip) {
      return res.status(404).json({
        success: false,
        message: "Trip not found"
      });
    }

    await trip.deleteOne();

    res.status(200).json({
      success: true,
      message: "Trip deleted successfully"
    });
  } catch (error) {
    next(error);
  }
};
