import React from "react";
import Logo1 from "../../assets/comp-logo1.png";
import Logo2 from "../../assets/comp-logo2.png";
import Logo3 from "../../assets/comp-logo3.png";
import Logo4 from "../../assets/comp-logo4.png";
import "./TrustedBy.css";

function TrustedBy() {
  return (
    <div className="trusted-by">
      <div className="trusted-by_conteiner slide-up">
        <div className="header-section">
          <h2>Trusted by</h2>
        </div>
        <div className="collobs-logo">
          <div className="logos">
            <div className="logo1 logox">
              <img src={Logo1} alt="art" />
            </div>
            <div className="logo2 logox">
              <img src={Logo2} alt="art" />
            </div>
            <div className="logo3 logox">
              <img src={Logo3} alt="art" />
            </div>
            <div className="logo4 logox">
              <img src={Logo4} alt="art" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedBy;
