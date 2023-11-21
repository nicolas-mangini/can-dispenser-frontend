import React, { useState } from "react";
import { useNavigate } from "react-router";

export function Dispense() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    marginTop: "100px",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
  };

  const arrowStyle = {
    fontSize: "24px",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const loadingContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
  };

  const loadingStyle = {
    fontSize: "18px",
    color: "#555",
    marginTop: "10px",
  };

  const spinnerStyle = {
    borderTop: "4px solid rgba(255, 255, 255, 0.3)",
    borderLeft: "4px solid rgba(255, 255, 255, 0.3)",
    borderBottom: "4px solid rgba(255, 255, 255, 0.3)",
    borderRight: "4px solid green",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    animation: "spin 1s linear infinite",
    marginTop: "10px",
  };

  const handleGoBack = () => {
    localStorage.clear();
    navigate("/");
  };

  const machineId = localStorage.getItem("machineId");

  const handleDispenseClick = () => {
    setLoading(true);

    fetch(`/dispenser/dispense/${machineId}`, {
      method: "POST",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <header style={{ background: "#333", color: "white", textAlign: "center", padding: "1em", marginBottom: "50px" }}>
        <h1>Dispense button</h1>
      </header>
      <div style={buttonContainerStyle}>
        {loading ? (
          <div style={loadingContainerStyle}>
            <div style={spinnerStyle}></div>
            <p style={loadingStyle}>Dispensing...</p>
          </div>
        ) : (
          <>
            <button className="btn-class-name"  onClick={handleDispenseClick}>
              <span className="back"></span>
              <span className="front"></span>
            </button>
            <span style={arrowStyle} onClick={handleGoBack}>
              ← Go Back to Home
            </span>
          </>
        )}
      </div>
    </div>
  );
}

