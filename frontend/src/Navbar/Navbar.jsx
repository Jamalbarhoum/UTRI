import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarStyle = {
    width: "100%",
    backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
    color: "#FFF",
    display: "flex",
    height: "10vh",
    justifyContent: "space-between",
    listStyle: "none",
    padding: "0 100px",
    position: "fixed",
    zIndex: "100",
  };

  const listItemStyle = {
    display: "flex",
    height: "100%",
    alignItems: "center",
    gap: "20px",
    padding: "30px",
    fontFamily: "Acme",
    fontSize: "18px",
    paddingTop: "30px",
    letterSpacing: "0.1em",
    cursor: "pointer",
  };

  return (
    <div style={navbarStyle}>
      <div>
        <img
          style={{ height: "100%", width: "100%" }}
          src="./2.svg"
          alt="no image UTri"
        />
      </div>

      <div style={listItemStyle}>
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
