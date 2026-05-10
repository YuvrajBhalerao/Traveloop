import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

const CreateTrip = () => {
  const [form, setForm] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/trips", form);

      alert("Trip Created Successfully");

      setForm({
        destination: "",
        startDate: "",
        endDate: "",
        budget: ""
      });
    } catch (error) {
      alert("Failed to create trip");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h1>Create Trip</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Destination"
            required
            value={form.destination}
            onChange={(e) =>
              setForm({
                ...form,
                destination: e.target.value
              })
            }
          />

          <br /><br />

          <input
            type="date"
            required
            value={form.startDate}
            onChange={(e) =>
              setForm({
                ...form,
                startDate: e.target.value
              })
            }
          />

          <br /><br />

          <input
            type="date"
            required
            value={form.endDate}
            onChange={(e) =>
              setForm({
                ...form,
                endDate: e.target.value
              })
            }
          />

          <br /><br />

          <input
            type="number"
            placeholder="Budget"
            required
            value={form.budget}
            onChange={(e) =>
              setForm({
                ...form,
                budget: e.target.value
              })
            }
          />

          <br /><br />

          <button type="submit">
            Create Trip
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateTrip;
