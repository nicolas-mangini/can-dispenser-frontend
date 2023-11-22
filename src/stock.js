import React, { useState } from "react";
import { useNavigate } from "react-router";

// Loader component
const Loader = () => (
  <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.8)", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="spinner"></div>
  </div>
);

export function StockHandler() {
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
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
    localStorage.clear();
    navigate("/");
  };

  const handleNumberClick = (number) => {
    const newNumber = parseInt(`${selectedNumber}${number}`, 10);
    setSelectedNumber(newNumber);
  };

  const handleClearClick = () => {
    setSelectedNumber(0);
  };

  const handleSaveAndSend = () => {
    console.log("Número seleccionado:", selectedNumber);
  
    // Set loading to true before the fetch
    setLoading(true);
  
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
      })
      .finally(() => {
        // Reset loading state
        setLoading(false);
      });
  };
  

  return (
    <div>
      {/* Full-page loader */}
      {loading && <Loader />}

      <header style={{ background: "#333", color: "white", textAlign: "center", padding: "1em", marginBottom: "50px" }}>
        <h1>Dispense button</h1>
      </header>
      <div style={containerStyle}>
        {/* Display the selected number */}
        <input
          type="text"
          value={selectedNumber}
          onChange={() => {}}
          className="input"
          readOnly
        />

        {/* Your keypad */}
        <div className="keypad">
          <div className="content">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
              <div key={number} onClick={() => handleNumberClick(number)}>
                {number}
              </div>
            ))}
            <div onClick={handleClearClick}>Clear</div>
          </div>
        </div>

        {/* Button to save and send the selected number */}
        <button onClick={handleSaveAndSend} style={buttonStyle}>
          {loading ? "Saving..." : "Enter"}
        </button>

        {/* "Go Back" button */}
        <span style={{ fontSize: "18px", cursor: "pointer", marginTop: "10px" }} onClick={navigateBack}>
          ← Go Back
        </span>
      </div>
    </div>
  );
}

