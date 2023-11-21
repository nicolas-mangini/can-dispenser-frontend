import React from "react";
import { useNavigate } from "react-router";

export function Choose() {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "200px",
    gap:"100px"
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

  return ( <div>
    <header style={{ background: "#333", color: "white", textAlign: "center", padding: "1em", marginBottom: "50px" }}>
      <h1>What do you want to do?</h1>
    </header>
    <div style={containerStyle}>
      <button  className="sbutton"onClick={handleDispenseClick}>
        <span>
        Dispense
        </span>
      </button>
      <button className="sbutton" onClick={handleStockClick}>
        <span>
        Handle Stock
        </span>
      </button>
    </div>
    </div>
  );
}
