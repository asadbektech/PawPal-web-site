import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Couriers from "../Couriers/Couriers";
import TrustSafety from "../TrustSafety/TrustSafety";
import TrustedBy from "../TrustedBy/TrustedBy";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="main">
      <div className="navbar-content">
        <Navbar />
      </div>
      <div className="header-content">
        <Header />
      </div>
      <div className="couriers-content">
        <Couriers />
      </div>
      <div className="trust-safety-conent">
        <TrustSafety />
      </div>
      <div className="trusted-by-content">
        <TrustedBy />
      </div>
      <div className="contact-content">
        <Contact />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}

export default App;
