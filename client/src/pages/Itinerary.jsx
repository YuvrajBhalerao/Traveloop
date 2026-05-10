import Navbar from "../components/Navbar";

const Itinerary = () => {
  return (
    <>
      <Navbar />

      <div style={{ padding: "2rem" }}>
        <h1>AI Itinerary</h1>

        <p>
          Your generated itinerary will appear here.
        </p>
      </div>
    </>
  );
};

export default Itinerary;
