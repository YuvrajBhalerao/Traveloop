import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const savedTrips =
      JSON.parse(localStorage.getItem("trips")) || [];

    setTrips(savedTrips);
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h1>Your Trips</h1>

        <br />

        {trips.length === 0 ? (
          <p>No trips created yet.</p>
        ) : (
          trips.map((trip) => (
            <div
              key={trip.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "10px",
              }}
            >
              <h3>{trip.destination}</h3>

              <p>
                {trip.startDate} → {trip.endDate}
              </p>

              <p>Budget: ₹{trip.budget}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Dashboard;