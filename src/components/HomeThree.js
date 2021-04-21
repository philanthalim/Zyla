import React from "react";

const HomeThree = () => {
  return (
    <div className="section-three">
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Browse through reviews from 30+ blogshops
      </h2>
      <div
        style={{
          flexDirection: "row",
          backgroundColor: "null",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <ul style={{ width: "100px" }}>
          <li>MGP</li>
          <li>LoveBonito</li>
          <li>Supergurl</li>
          <li>Hervelvetvase</li>
          <li>Carrislabelle</li>
          <li>Lovet</li>
        </ul>
        <ul style={{ width: "100px" }}>
          <li>Runwaybandits</li>
          <li>Topazette</li>
          <li>Mikayla</li>
          <li>Shopsassydream</li>
          <li>TheEditorsMarket</li>
          <li>Ohvola</li>
        </ul>
        <ul style={{ width: "100px" }}>
          <li>MDS</li>
          <li>Anticlockwise</li>
          <li>Zara</li>
          <li>Fayth</li>
          <li>LoveandBravery</li>
          <li>Stagewalk</li>
        </ul>
      </div>
    </div>
  );
};

export default HomeThree;
