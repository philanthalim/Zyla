import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/ilo.jpeg";

const Submitted = () => {
  return (
    <div>
      <div className="submitted-container">
        <img className="submitted-img" alt="" src={lovet}></img>
        <h3 style={{ position: "absolute" }}>Thanks for rating!</h3>
      </div>
      <div style={{ height: "30vh" }}></div>
      <Footer />
    </div>
  );
};

export default Submitted;
