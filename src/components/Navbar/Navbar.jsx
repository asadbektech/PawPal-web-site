import React from "react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

const logo = Logo;
function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="box logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="box navigation">
          <span className="nav-item">Couriers</span>
          <span className="nav-item">Trust & Safety</span>
          <span className="nav-item third">Contact</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
