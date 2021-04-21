import React from "react";
import Footer from "../components/Footer";

const SearchResults = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(236,167,189,0.8)",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          color: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <h3>Search Results</h3>
      </div>
      <div style={{ height: "40vh" }}></div>
      <Footer />
    </div>
  );
};

export default SearchResults;
