import React, { useState } from "react";
import { useNavigate } from "react-router";

export function StockHandler() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  };

  const inputStyle = {
    width: "200px",
    padding: "10px",
    fontSize: "16px",
    margin: "10px",
  };

  const buttonStyle = {
    background: "#808080",
    color: "white",
    padding: "15px 30px",
    fontSize: "18px",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  };

  const navigateBack = () => {
    localStorage.clear()
    navigate("/");
  };

  const handleNumberChange = (event) => {
    const number = parseInt(event.target.value, 10);
    setSelectedNumber(isNaN(number) ? 0 : number);
  };

  const handleSaveAndSend = () => {
    console.log("Número seleccionado:", selectedNumber);

    // Aquí puedes agregar lógica para enviar el número al back-end
    // ...

    // Navegamos de regreso a la página principal después de realizar la acción
    fetch(`/dispenser/stock/${localStorage.getItem("machineId")}/${selectedNumber}`, {
      method: "POST", // Especificar el método POST
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

    // Vuelve atrás después de realizar la acción
    navigateBack();
  };

  return (
    <div style={containerStyle}>
      <h1>Stock Handler</h1>
      <label>
        Select a number:
        <input
          type="number"
          value={selectedNumber}
          onChange={handleNumberChange}
          style={inputStyle}
        />
      </label>
      <button onClick={handleSaveAndSend} style={buttonStyle}>
        Update stock
      </button>
      <button onClick={navigateBack} style={buttonStyle}>
        Go Back
      </button>
    </div>
  );
}
