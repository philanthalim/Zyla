import React from "react";
import DreaChong from "./DreaChong.jpg";

const HomeOne = () => {
  return (
    <div className="section-one">
      <div className="left">
        <h2 style={{ fontSize: "2rem" }}>
          Making decisions just got{" "}
          <span style={{ color: "#E892AD" }}>easier</span>
        </h2>
        <p style={{ fontSize: "1.2rem" }}>
          Read reviews for more than 30 blogshops in Singapore
        </p>
      </div>
      <div className="right">
        <img className="right-image" src={DreaChong} alt="BlogShopImg"></img>
      </div>
    </div>
  );
};

export default HomeOne;
