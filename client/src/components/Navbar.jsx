import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        background: "#111827",
        color: "white",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2>Traveloop</h2>

      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-trip">Create Trip</Link>
      </div>
    </nav>
  );
};

export default Navbar;
