import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        minHeight: "100px",
        backgroundColor: "#FDF3F2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div className="footer-left">
        <h3 style={{ color: "#E892AD" }}>NoFilter</h3>
        <p>About Us</p>
        <p>Write a review</p>
      </div>
      <div className="footer-right">
        <p>Contact Us</p>
        <p>nofilter@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
