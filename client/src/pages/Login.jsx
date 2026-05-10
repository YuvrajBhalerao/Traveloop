import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Save logged in user
    localStorage.setItem(
      "traveloopUser",
      JSON.stringify({
        username,
      })
    );

    // Redirect to homepage
    navigate("/");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        className="glass-card"
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            marginBottom: "10px",
            fontWeight: "800",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginBottom: "30px",
          }}
        >
          Login to continue your journey.
        </p>

        <form
          onSubmit={handleLogin}
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          <button
            type="submit"
            style={{
              padding: "16px",
              borderRadius: "16px",
              background:
                "linear-gradient(135deg,#ff512f,#dd2476)",
              color: "white",
              fontSize: "16px",
              fontWeight: "700",
              border: "none",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;