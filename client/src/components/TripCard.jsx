const TripCard = ({ trip }) => {
  return (
    <div
      style={{
        background: "white",
        padding: "1rem",
        borderRadius: "10px",
        marginBottom: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <h3>{trip.destination}</h3>

      <p>
        {new Date(trip.startDate).toDateString()} -{" "}
        {new Date(trip.endDate).toDateString()}
      </p>

      <p>Budget: ₹{trip.budget}</p>
    </div>
  );
};

export default TripCard;
