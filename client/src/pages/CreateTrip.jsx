import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const navigate = useNavigate();

  const [destination, setDestination] =
    useState("");

  const [startDate, setStartDate] =
    useState("");

  const [endDate, setEndDate] =
    useState("");

  const [travelType, setTravelType] =
    useState("");

  const [stops, setStops] = useState([]);

  const [city, setCity] = useState("");

  const [days, setDays] = useState("");

  // Add stop

  const addStop = () => {
    if (!city || !days) return;

    setStops([
      ...stops,
      {
        city,
        days,
      },
    ]);

    setCity("");
    setDays("");
  };

  // Automatic budget estimation

  const calculateBudget = () => {
    const totalDays = stops.reduce(
      (sum, stop) =>
        sum + Number(stop.days),
      0
    );

    return totalDays * 5000;
  };

  // Create trip

  const handleCreateTrip = (e) => {
    e.preventDefault();

    const newTrip = {
      id: Date.now(),
      destination,
      startDate,
      endDate,
      travelType,
      stops,
      estimatedBudget:
        calculateBudget(),
    };

    const existingTrips =
      JSON.parse(
        localStorage.getItem(
          "traveloopTrips"
        )
      ) || [];

    existingTrips.push(newTrip);

    localStorage.setItem(
      "traveloopTrips",
      JSON.stringify(existingTrips)
    );

    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "800px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "12px",
            fontWeight: "800",
          }}
        >
          Create Your Dream Trip ✈️
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "35px",
            fontSize: "17px",
          }}
        >
          Plan your next unforgettable journey with Traveloop.
        </p>

        <form
          onSubmit={handleCreateTrip}
          style={{
            display: "grid",
            gap: "22px",
          }}
        >
          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(
                e.target.value
              )
            }
            required
          />

          {/* Dates */}

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label
                style={{
                  fontWeight: "600",
                }}
              >
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(
                    e.target.value
                  )
                }
                required
              />
            </div>

            <div>
              <label
                style={{
                  fontWeight: "600",
                }}
              >
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(
                    e.target.value
                  )
                }
                required
              />
            </div>
          </div>

          {/* Travel Type */}

          <select
            value={travelType}
            onChange={(e) =>
              setTravelType(
                e.target.value
              )
            }
            required
          >
            <option value="">
              Select Travel Type
            </option>

            <option>Adventure</option>
            <option>Luxury</option>
            <option>Family</option>
            <option>Solo</option>
            <option>Couple</option>
          </select>

          {/* Travel Stops */}

          <div
            className="glass-card"
            style={{
              padding: "20px",
            }}
          >
            <h3
              style={{
                marginBottom: "15px",
              }}
            >
              Add Travel Stops
            </h3>

            <div
              style={{
                display: "grid",
                gap: "15px",
              }}
            >
              <input
                type="text"
                placeholder="City Name"
                value={city}
                onChange={(e) =>
                  setCity(
                    e.target.value
                  )
                }
              />

              <input
                type="number"
                placeholder="Number of Days"
                value={days}
                onChange={(e) =>
                  setDays(
                    e.target.value
                  )
                }
              />

              <button
                type="button"
                onClick={addStop}
                style={{
                  padding: "14px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg,#667eea,#764ba2)",
                  color: "white",
                  fontWeight: "700",
                  border: "none",
                }}
              >
                Add Stop
              </button>
            </div>

            {/* Stops List */}

            {stops.length > 0 && (
              <div
                style={{
                  marginTop: "20px",
                }}
              >
                {stops.map(
                  (stop, index) => (
                    <div
                      key={index}
                      style={{
                        padding: "12px",
                        marginBottom: "10px",
                        borderRadius:
                          "12px",
                        background:
                          "rgba(255,255,255,0.4)",
                      }}
                    >
                      📍 {stop.city} —{" "}
                      {stop.days} days
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Budget */}

          <div
            style={{
              padding: "18px",
              borderRadius: "14px",
              background:
                "rgba(255,255,255,0.5)",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            Estimated Budget: ₹
            {calculateBudget()}
          </div>

          {/* Submit */}

          <button
            type="submit"
            style={{
              padding: "16px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg,#ff512f,#dd2476)",
              color: "white",
              fontSize: "17px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
            }}
          >
            Generate Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTrip;