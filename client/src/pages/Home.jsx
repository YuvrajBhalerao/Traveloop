import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      "traveloopUser"
    );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    loadTrips();
  }, []);

  const loadTrips = () => {
    const storedTrips =
      JSON.parse(
        localStorage.getItem("traveloopTrips")
      ) || [];

    setTrips(storedTrips);
  };

  const deleteTrip = (id) => {
    const updatedTrips = trips.filter(
      (trip) => trip.id !== id
    );

    setTrips(updatedTrips);

    localStorage.setItem(
      "traveloopTrips",
      JSON.stringify(updatedTrips)
    );
  };

  return (
    <div>
      {/* HERO */}

      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          background:
            "linear-gradient(rgba(0,0,0,0.45),rgba(0,0,0,0.45)),url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              color: "white",
              maxWidth: "700px",
            }}
          >
            {user && (
              <div
                style={{
                  marginBottom: "20px",
                  background:
                    "rgba(255,255,255,0.15)",
                  padding: "12px 20px",
                  borderRadius: "14px",
                  backdropFilter: "blur(10px)",
                  display: "inline-block",
                }}
              >
                Welcome, {user.username} 👋
              </div>
            )}

            <h1
              style={{
                fontSize: "65px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "20px",
              }}
            >
              Your Travel Dashboard
            </h1>

            <p
              style={{
                fontSize: "20px",
                opacity: 0.95,
              }}
            >
              Manage and explore all your dream trips in one place.
            </p>
          </div>
        </div>
      </section>

      {/* TRIPS */}

      <section
        style={{
          padding: "80px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              marginBottom: "40px",
            }}
          >
            <h2
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              Your Trips
            </h2>

            <p
              style={{
                color: "#6b7280",
              }}
            >
              Trips you created will appear here.
            </p>
          </div>

          {trips.length === 0 ? (
            <div
              className="glass-card"
              style={{
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                }}
              >
                No Trips Yet ✈️
              </h3>

              <p
                style={{
                  color: "#6b7280",
                }}
              >
                Create your first dream trip now.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(320px,1fr))",
                gap: "30px",
              }}
            >
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="glass-card"
                  style={{
                    padding: "25px",
                    position: "relative",
                  }}
                >
                  <button
                    onClick={() =>
                      deleteTrip(trip.id)
                    }
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      background: "#ff4d4f",
                      color: "white",
                      border: "none",
                      padding: "8px 14px",
                      borderRadius: "10px",
                      fontWeight: "600",
                    }}
                  >
                    Delete
                  </button>

                  <h3
                    style={{
                      fontSize: "28px",
                      marginBottom: "20px",
                    }}
                  >
                    {trip.destination}
                  </h3>

                  <div
                    style={{
                      display: "grid",
                      gap: "12px",
                    }}
                  >
                    <p>
                      <strong>Start Date:</strong>{" "}
                      {trip.startDate}
                    </p>

                    <p>
                      <strong>End Date:</strong>{" "}
                      {trip.endDate}
                    </p>

                    <p>
                      <strong>Budget:</strong> ₹
                      {trip.budget}
                    </p>

                    <p>
                      <strong>Travel Type:</strong>{" "}
                      {trip.travelType}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;