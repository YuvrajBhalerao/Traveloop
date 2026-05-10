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

  const [budget, setBudget] = useState("");

  const [travelType, setTravelType] =
    useState("");

  const handleCreateTrip = (e) => {
    e.preventDefault();

    const newTrip = {
      id: Date.now(),
      destination,
      startDate,
      endDate,
      budget,
      travelType,
    };

    const existingTrips =
      JSON.parse(
        localStorage.getItem("traveloopTrips")
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
          maxWidth: "700px",
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
              setDestination(e.target.value)
            }
            required
          />

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
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) =>
                  setStartDate(e.target.value)
                }
                required
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "600",
                }}
              >
                End Date
              </label>

              <input
                type="date"
                value={endDate}
                onChange={(e) =>
                  setEndDate(e.target.value)
                }
                required
              />
            </div>
          </div>

          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
            required
          />

          <select
            value={travelType}
            onChange={(e) =>
              setTravelType(e.target.value)
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
              marginTop: "10px",
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