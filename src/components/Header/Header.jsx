import React from "react";
import "./Header.css";
import heroImage from "../../assets/hero-image.jpg";

function Header() {
  return (
    <div className="header">
      <div className="header-container slide-in-right">
        <div className="info">
          <p>Safe Travels for Your Furry Friend</p>
          <h2>
            Pet transport company that pairs owners with vetted couriers to
            ensure pets travel safely and comfortably door to door.
          </h2>
        </div>
        <div className="image">
          <img src={heroImage} alt="This is hero img" />
        </div>
      </div>
    </div>
  );
}

export default Header;
