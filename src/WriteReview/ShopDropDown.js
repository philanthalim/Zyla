import React from "react";

const DropDown = () => {
  return (
    <div className="shop-cat-dd-container">
      <p style={{ marginRight: "20px" }}>
        Select{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Blogshop</span>{" "}
      </p>
      <select className="shop-cat-select">
        <option>Love Bonito</option>
        <option>Lovet</option>
        <option>Shopsassydream</option>
        <option>Ohvola</option>
        <option>Supergurl</option>
        <option>Younghungryfree</option>
        <option>Carrislabelle</option>
        <option>MGP</option>
        <option>Runwaybandits</option>
        <option>Neonmello</option>
        <option>Mikalya</option>
        <option>Cheris</option>
        <option>MDS</option>
        <option>Fayth</option>
      </select>
    </div>
  );
};

export default DropDown;
