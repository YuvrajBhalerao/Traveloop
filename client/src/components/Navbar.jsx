import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.7)",
        borderBottom: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 40px",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "30px",
            fontWeight: "800",
            background:
              "linear-gradient(135deg,#ff512f,#dd2476)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Traveloop
        </Link>

        <div
          style={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
          }}
        >
          <Link to="/">Home</Link>

          <Link to="/create-trip">
            Create Trip
          </Link>

          <Link to="/login">
            <button
              style={{
                padding: "12px 22px",
                borderRadius: "14px",
                background:
                  "linear-gradient(135deg,#ff512f,#dd2476)",
                color: "white",
                fontWeight: "600",
                border: "none",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;