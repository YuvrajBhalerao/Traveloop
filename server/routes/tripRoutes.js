const express = require("express");
const router = express.Router();

const {
  createTrip,
  getTrips,
  getTripById,
  deleteTrip
} = require("../controllers/tripController");

router.post("/", createTrip);
router.get("/", getTrips);
router.get("/:id", getTripById);
router.delete("/:id", deleteTrip);

module.exports = router;
