import React, { useEffect, useState } from "react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [user, setUser] = useState(null);

  // Re-check user whenever route changes
  useEffect(() => {
    const storedUser = localStorage.getItem(
      "traveloopUser"
    );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("traveloopUser");

    setUser(null);

    navigate("/login");
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.75)",
        borderBottom:
          "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        {/* LOGO */}

        <Link
          to="/"
          style={{
            fontSize: "42px",
            fontWeight: "800",
            background:
              "linear-gradient(135deg,#ff512f,#dd2476)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textDecoration: "none",
          }}
        >
          Traveloop
        </Link>

        {/* MENU */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            fontSize: "18px",
            fontWeight: "500",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#111827",
            }}
          >
            Home
          </Link>

          <Link
            to="/create-trip"
            style={{
              textDecoration: "none",
              color: "#111827",
            }}
          >
            Create Trip
          </Link>

          {user ? (
            <>
              <span
                style={{
                  fontWeight: "700",
                  color: "#111827",
                }}
              >
                {user.username}
              </span>

              <button
                onClick={handleLogout}
                style={{
                  padding: "12px 22px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,#ff4d4f,#ff1e56)",
                  color: "white",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button
                style={{
                  padding: "12px 22px",
                  borderRadius: "14px",
                  background:
                    "linear-gradient(135deg,#ff512f,#dd2476)",
                  color: "white",
                  fontWeight: "700",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;