import React from "react";
import "./Couriers.css";
import courierImg1 from "../../assets/couriers-image1.jpg";
import courierImg2 from "../../assets/couriers-image2.jpg";
import courierImg3 from "../../assets/couriers-image3.jpg";

function Couriers() {
  return (
    <div className="couriers">
      <div className="container-couriers fade-in">
        <div className="image-group">
          <div className="top-img">
            <img src={courierImg1} alt="Couriers section img" />
          </div>
          <div className="down-img">
            <div className="img1">
              <img src={courierImg2} alt="Couriers section img" />
            </div>
            <div className="img2">
              <img src={courierImg3} alt="Couriers section img" />
            </div>
          </div>
        </div>
        <div className="information">
          <h2>Our Couriers</h2>
          <p>
            Every PawPal courier is a carefully selected animal
            lover—background-checked, identity-verified, and trained in safe pet
            transport.
          </p>
          <p>
            We review every journey, gather feedback, and only work with people
            who consistently deliver safe, happy experiences for pets and their
            owners.
          </p>
          <button className="couriers-btn">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Couriers;
