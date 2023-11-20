import React from "react";
import { useNavigate } from "react-router";

export function Choose() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  };

  const buttonStyle = {
    background: "black",
    color: "white",
    padding: "10px",
    margin: "10px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const navigate = useNavigate();

  const handleDispenseClick = () => {
    // Add logic for "Dispense" button click
    console.log("Dispense button clicked");
    // Example navigation
    navigate("/dispense");
  };

  const handleStockClick = () => {
    // Add logic for "Check Stock" button click
    console.log("Check Stock button clicked");
    // Example navigation
    navigate("/stock");
  };

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Choose what do you want to do</div>
      <button style={buttonStyle} onClick={handleDispenseClick}>
        Dispense
      </button>
      <button style={buttonStyle} onClick={handleStockClick}>
        Check Stock
      </button>
    </div>
  );
}
