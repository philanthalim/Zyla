import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <h3 style={{ fontFamily: "Vogue", fontSize: "1.3rem" }}>ZYLA</h3>
        <a
          style={{ textDecoration: "none", color: "black", marginTop: "-15px" }}
          href="/about"
        >
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
