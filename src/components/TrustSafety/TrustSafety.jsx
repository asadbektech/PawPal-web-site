import React from "react";
import ImageDown from "../../assets/trust-safety-down.jpg";
import ImageUp from "../../assets/trust-safety-up.jpg";
import "./TrustSafety.css";

function TrustSafety() {
  return (
    <div className="trust-safety">
      <div className="trust_safety-container slide-in-left">
        {/* There information section codes */}
        <div className="infos">
          {/* This is header(h2) */}
          <h2>Trust & Safety</h2>
          {/* This sis information about this section */}
          <p>
            We take legal and ethical responsibility for every journey. When you
            book with us, you're not just hiring a courier—you’re placing your
            pet in our certified care.
          </p>
          {/* This is list of item for this section */}
          <ul className="list">
            <li className="list-item">
              <span className="bold-element">
                <b>Legally Covered</b>
              </span>{" "}
              – We’re accountable for your pet during the entire journey.
            </li>
            <li className="list-item">
              <span className="bold-element">
                <b>Verified Couriers</b>
              </span>{" "}
              – Background-checked and trained animal lovers.
            </li>
            <li className="list-item">
              <span className="bold-element">
                <b>Pet-First Policies</b>
              </span>{" "}
              – Travel standards aligned with animal welfare laws.
            </li>
            <li className="list-item">
              <span className="bold-element">
                <b>Live Updates</b>
              </span>{" "}
              – Track your pet and stay in touch throughout the trip.
            </li>
          </ul>
          {/* This is button */}
          <button className="trust-btn"></button>
        </div>
        {/* There have images of this section */}
        <div className="img-container">
          <div className="image2">
            <img src={ImageUp} alt="art" />
          </div>
          <div className="image1">
            <img src={ImageDown} alt="art" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustSafety;
