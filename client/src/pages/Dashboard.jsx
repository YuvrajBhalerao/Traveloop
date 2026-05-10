import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TripCard from "../components/TripCard";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const res = await API.get("/trips");
      setTrips(res.data.trips);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h1>Your Trips</h1>

        <br />

        {trips.map((trip) => (
          <TripCard key={trip._id} trip={trip} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
