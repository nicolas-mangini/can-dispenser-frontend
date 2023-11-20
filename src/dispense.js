import React from "react";
import { useNavigate } from "react-router";

export function Dispense() {
  const navigate = useNavigate();

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px", // Ajusta según sea necesario
    marginTop: "50px", // Ajusta según sea necesario
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "green", // Ajusta según sea necesario
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
  const handleGoBack = () => {
    // Limpiar el localStorage
    localStorage.clear();
    // Navegar de regreso al home
    navigate("/");
  };
  const machineId = localStorage.getItem("machineId");

  const handleDispenseClick = () =>{
    fetch(`/dispenser/dispense/${machineId}`, {
        method: "POST", // Especificar el método POST
        // headers: {
        //   "Content-Type": "application/json",
        // },
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
        });
    
  }
  
return (
  <div style={buttonContainerStyle}>
    <h1>Dispense Button</h1>
    <button style={buttonStyle} onClick={handleDispenseClick}>
      Dispense
    </button>
    <span style={arrowStyle} onClick={handleGoBack}>
      ← Go Back to Home
    </span>
  </div>
);}
