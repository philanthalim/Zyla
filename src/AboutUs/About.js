import React from "react";
import Footer from "../components/Footer";
import lovet from "./lovetChamp.jpeg";

const About = () => {
  return (
    <div style={{ minHeight: "50vh" }}>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>About Zyla</h3>
      </div>
      <div
        style={{ margin: "8rem", fontSize: "1.2rem", lineHeight: "1.8rem" }}
      >
        <h3>Real Reviews</h3>
        <p>
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
          Unsure of whether to buy the latest dress from Lovet that everyone is
          raving about? We offer access to real reviews from paying customers
          like yourself, so that consumers can make well-informed decisions.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;
