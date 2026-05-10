import React, {
  useEffect,
  useState,
} from "react";

const cityActivities = {
  Paris: [
    "Eiffel Tower",
    "Louvre Museum",
    "Seine River Cruise",
  ],

  Dubai: [
    "Burj Khalifa",
    "Desert Safari",
    "Dubai Mall",
  ],

  Maldives: [
    "Scuba Diving",
    "Island Hopping",
    "Beach Dinner",
  ],
};

const Home = () => {
  const [user, setUser] =
    useState(null);

  const [trips, setTrips] =
    useState([]);

  useEffect(() => {
    // User

    const storedUser =
      localStorage.getItem(
        "traveloopUser"
      );

    if (storedUser) {
      setUser(
        JSON.parse(storedUser)
      );
    }

    // Trips

    const storedTrips =
      JSON.parse(
        localStorage.getItem(
          "traveloopTrips"
        )
      ) || [];

    setTrips(storedTrips);
  }, []);

  // Delete Trip

  const deleteTrip = (id) => {
    const updatedTrips =
      trips.filter(
        (trip) => trip.id !== id
      );

    setTrips(updatedTrips);

    localStorage.setItem(
      "traveloopTrips",
      JSON.stringify(updatedTrips)
    );
  };

  // Share Trip

  const shareTrip = (trip) => {
    navigator.clipboard.writeText(
      JSON.stringify(trip, null, 2)
    );

    alert(
      "Trip copied to clipboard!"
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
          backgroundPosition:
            "center",
          padding: "40px",
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
                  padding:
                    "12px 20px",
                  borderRadius:
                    "14px",
                  backdropFilter:
                    "blur(10px)",
                  display:
                    "inline-block",
                  fontWeight: "600",
                }}
              >
                Welcome,{" "}
                {user.username} 👋
              </div>
            )}

            <h1
              style={{
                fontSize: "65px",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom:
                  "20px",
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
              Manage and explore
              all your dream trips
              in one place.
            </p>
          </div>
        </div>
      </section>

      {/* TRIPS */}

      <section
        style={{
          padding: "80px 40px",
        }}
      >
        <div className="container">
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
              marginBottom: "40px",
            }}
          >
            Trips you created
            will appear here.
          </p>

          {trips.length === 0 ? (
            <div
              className="glass-card"
              style={{
                padding: "40px",
                textAlign: "center",
              }}
            >
              <h3>
                No Trips Yet ✈️
              </h3>

              <p
                style={{
                  color: "#6b7280",
                }}
              >
                Create your first
                dream trip now.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit,minmax(340px,1fr))",
                gap: "30px",
              }}
            >
              {trips.map((trip) => (
                <div
                  key={trip.id}
                  className="glass-card"
                  style={{
                    padding: "25px",
                    position:
                      "relative",
                  }}
                >
                  {/* DELETE */}

                  <button
                    onClick={() =>
                      deleteTrip(
                        trip.id
                      )
                    }
                    style={{
                      position:
                        "absolute",
                      top: "15px",
                      right: "15px",
                      background:
                        "#ff4d4f",
                      color: "white",
                      border: "none",
                      padding:
                        "8px 14px",
                      borderRadius:
                        "10px",
                      fontWeight:
                        "600",
                    }}
                  >
                    Delete
                  </button>

                  {/* TITLE */}

                  <h3
                    style={{
                      fontSize:
                        "30px",
                      marginBottom:
                        "20px",
                    }}
                  >
                    {
                      trip.destination
                    }
                  </h3>

                  {/* DETAILS */}

                  <div
                    style={{
                      display:
                        "grid",
                      gap: "12px",
                    }}
                  >
                    <p>
                      <strong>
                        Start Date:
                      </strong>{" "}
                      {
                        trip.startDate
                      }
                    </p>

                    <p>
                      <strong>
                        End Date:
                      </strong>{" "}
                      {trip.endDate}
                    </p>

                    <p>
                      <strong>
                        Travel Type:
                      </strong>{" "}
                      {
                        trip.travelType
                      }
                    </p>

                    <p>
                      <strong>
                        Estimated
                        Budget:
                      </strong>{" "}
                      ₹
                      {
                        trip.estimatedBudget
                      }
                    </p>
                  </div>

                  {/* TIMELINE */}

                  {trip.stops
                    ?.length > 0 && (
                    <div
                      style={{
                        marginTop:
                          "20px",
                      }}
                    >
                      <strong>
                        Timeline
                      </strong>

                      {trip.stops.map(
                        (
                          stop,
                          index
                        ) => (
                          <div
                            key={
                              index
                            }
                            style={{
                              marginTop:
                                "10px",
                              padding:
                                "12px",
                              background:
                                "rgba(255,255,255,0.4)",
                              borderRadius:
                                "12px",
                            }}
                          >
                            📍{" "}
                            {
                              stop.city
                            }{" "}
                            (
                            {
                              stop.days
                            }{" "}
                            days)
                          </div>
                        )
                      )}
                    </div>
                  )}

                  {/* ACTIVITIES */}

                  {cityActivities[
                    trip.destination
                  ] && (
                    <div
                      style={{
                        marginTop:
                          "20px",
                      }}
                    >
                      <strong>
                        Suggested
                        Activities
                      </strong>

                      <ul
                        style={{
                          marginTop:
                            "10px",
                          paddingLeft:
                            "20px",
                        }}
                      >
                        {cityActivities[
                          trip
                            .destination
                        ].map(
                          (
                            activity,
                            index
                          ) => (
                            <li
                              key={
                                index
                              }
                            >
                              {
                                activity
                              }
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                  {/* SHARE */}

                  <button
                    onClick={() =>
                      shareTrip(
                        trip
                      )
                    }
                    style={{
                      marginTop:
                        "25px",
                      width: "100%",
                      padding:
                        "14px",
                      borderRadius:
                        "14px",
                      background:
                        "linear-gradient(135deg,#667eea,#764ba2)",
                      color:
                        "white",
                      border: "none",
                      fontWeight:
                        "700",
                    }}
                  >
                    Share Trip
                  </button>
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