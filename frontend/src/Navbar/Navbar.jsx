import React from "react";
import { Container } from "react-bootstrap";
function Navbar() {
  return (
    <Container
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        color:"#000",
        display: "flex",
        height: "10vh",
        justifyContent: "space-between",
        listStyle: "none",
        padding:"0 100px"
      }}
    >
      <div style={{ paddingTop: "15px" }}>
        <img
          style={{ height: "100%", width: "100%", transform: " scale(3.9)" }}
          src="Gray and Black Simple Studio Logo (4).png"
          alt=""
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
          cursor:"pointer"
        }}
      >
        <li>Design and Build</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Careers</li>
        <li>About</li>
        <li>Contact us</li>
      </div>
    </Container>
  );
}

export default Navbar;
