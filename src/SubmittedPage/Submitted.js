import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/ilo.jpeg";

const Submitted = () => {
  return (
    <div>
       <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>
          Thanks for rating!
        </h3>
      </div>
      <div style={{ height: "30vh" }}></div>
      <Footer />
    </div>
  );
};

export default Submitted;
