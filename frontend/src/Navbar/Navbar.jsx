import React from "react";
import { Container } from "react-bootstrap";
function Navbar() {
  return (
    <div
      style={{
        width:"100%",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        color: "#000",
        display: "flex",
        height: "10vh",
        justifyContent: "space-between",
        listStyle: "none",
        padding: "0 100px",
        position:"absolute",
        zIndex:"100",
      }}
    >
      <div >
        <img
          style={{ height: "100%", width: "100%"}}
          src="./2.svg"
          alt="no image UTri"
        />
      </div>

      {/* font-family: "Source Sans Pro", "Arial", sans-serif; */}
      <div
        style={{
          display: "flex",
          height: "100%",
          alignItems: "center",
          gap: "20px",
          padding: "30px",
          fontFamily: "Acme",
          fontSize: "17px",
          fontWeight: "bold",
          paddingTop: "30px",
          letterSpacing: ".025em",
          cursor: "pointer",
          color:"#F9F9F9"
        }}
      >
        <li>Design and Build</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Careers</li>
        <li>About</li>
        <li>Contact us</li>
      </div>
    </div>
  );
}

export default Navbar;
