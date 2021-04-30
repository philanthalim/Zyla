import React from "react";

const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        minHeight: "100px",
        backgroundColor: "#FDF3F2",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <div className="footer-left">
        <h3 style={{ fontFamily: "Vogue", fontSize: "1.3rem" }}>ZYLA</h3>
        <a style={{ textDecoration: "none", color: "black" }} href="/about">
          About Us
        </a>
        <a style={{ textDecoration: "none", color: "black" }} href="/rate">
          Write a review
        </a>
      </div>
      <div className="footer-right">
        <h4>Contact Us</h4>
        <p>zylasg@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
