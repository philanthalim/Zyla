import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/lovetSubmitted.jpeg";
import { Link } from "react-router-dom";

const SearchResults = () => {
  return (
    <div>
      <div
        style={{
          height: "55vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          color: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            filter: "brightness(55%)",
          }}
          src={lovet}
          alt="lovet"
        ></img>

        <h3 style={{ position: "absolute", color: "white" }}>Search Results</h3>
      </div>
      <Link to={"/view-shop"}>
        <p>Click Here</p>
      </Link>
      <div style={{ height: "40vh" }}></div>

      <Footer />
    </div>
  );
};

export default SearchResults;
