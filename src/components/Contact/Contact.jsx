import React from "react";
import petImage from "../../assets/pet-image.png";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="picture">
          <img src={petImage} alt="art" />
        </div>
        <div className="contact-info">
          <div className="contact-header">
            <h2>Ready to Get Started with PawPal?</h2>
          </div>
          <div className="contact-data">
            <p>
              Book safe, stress-free transport for your pet—or become a verified
              courier and help animals travel with care.
            </p>
          </div>
          <div className="contact-buttons">
            <button className="btn1">Book a journey</button>
            <button className="btn2">Become a courier</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
