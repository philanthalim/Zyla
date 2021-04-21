import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/ilo.jpeg";

const Submitted = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(236,167,189,0.8)",
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          position: "relative",
          color: "rgba(255,255,255,0.9)",
        }}
      >
        <img
          alt=""
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
           filter:'brightness(60%)',
          }}
          src={lovet}
        ></img>
        <h3 style={{ position: "absolute" }}>Thanks for rating!</h3>
      </div>
      <div style={{ height: "30vh" }}></div>
      <Footer />
    </div>
  );
};

export default Submitted;
