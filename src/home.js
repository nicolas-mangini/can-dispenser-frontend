import React from "react";
import { useNavigate } from "react-router";

export function Home() {
    const imageContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px", // Adjust as needed
        flexWrap: "wrap", // Allow cards to wrap to the next line
    };

    const cardStyle = {
        position: "relative",
        width: "250px", // Adjusted for a larger card
        height: "250px", // Adjusted for a larger card
        margin: "10px",
        overflow: "hidden",
        borderRadius: "15px", // Adjust as needed
        transition: "transform 0.3s ease-in-out, border 0.3s ease-in-out", // Separated transitions
        border: "5px solid", // Set initial border to transparent
    };

    const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    };

    const textContainerStyle = {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "8px",
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
        animation: "scroll-up 2s forwards", // Added animation
    };

    const handleHover = (event) => {
        event.currentTarget.style.transform = "scale(1.1)";
        event.currentTarget.querySelector(".text-container").style.opacity = 1;
    };

    const handleHoverOut = (event) => {
        event.currentTarget.style.transform = "scale(1)";
        event.currentTarget.querySelector(".text-container").style.opacity = 0;
    };

    const navigate=useNavigate();

    const handleOnClickMachine1 = (event) => {
        localStorage.setItem("machineId", '94E68600E158');
        navigate("/choose/1");
    }

    const handleOnClickMachine2 = (event) => {
        localStorage.setItem("machineId", '94E68600E158');
        navigate("/choose/2");
    }

    return (
        <div>
            <style>
                {`
                    @keyframes scroll-up {
                        from {
                            transform: translateY(100%);
                        }
                        to {
                            transform: translateY(0);
                        }
                    }

                    @media (max-width: 600px) {
                        /* Adjust styles for screens with a width of 600 pixels or less */
                        .card-container {
                            flex-direction: column; /* Stack cards vertically */
                        }
                    }
                `}
            </style>
            <header style={{ background: "#333", color: "white", textAlign: "center", padding: "1em", marginBottom: "50px" }}>
                <h1>Choose a Machine</h1>
            </header>
            <div style={imageContainerStyle} className="card-container">
                <div style={{ ...cardStyle, borderColor: "red" }} onMouseOver={handleHover} onMouseOut={handleHoverOut} onClick={handleOnClickMachine1}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/004/596/922/original/vending-machine-line-icon-vector.jpg"
                        alt="Machine 1"
                        style={imageStyle}
                    />
                    <div className="text-container" style={textContainerStyle}>
                        <h2>Machine 1</h2>
                    </div>
                </div>
                <div style={{ ...cardStyle, borderColor: "blue" }} onMouseOver={handleHover} onMouseOut={handleHoverOut} onClick={handleOnClickMachine2}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/004/596/922/original/vending-machine-line-icon-vector.jpg"
                        alt="Machine 2"
                        style={imageStyle}
                    />
                    <div className="text-container" style={textContainerStyle}>
                        <h2>Machine 2</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
