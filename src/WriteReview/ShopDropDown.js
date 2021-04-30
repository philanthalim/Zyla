import React, { useContext } from "react";
import { ReviewContext } from "../context";

const DropDown = () => {
  const { setShop } = useContext(ReviewContext);
  const onSelect = (e) => {
    setShop(e.target.value);
  };

  return (
    <div className="shop-cat-dd-container">
      <p style={{ marginRight: "20px" }}>
        Select{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Blogshop</span>{" "}
      </p>
      <select className="shop-cat-select" onChange={(e) => onSelect(e)}>
        <option>Love Bonito</option>
        <option>Lovet</option>
        <option>Neonmello</option>
        <option>Supergurl</option>
        <option>Topazette</option>
        <option>Carrislabelle</option>
        <option>Younghungryfree</option>
        <option>Runwaybandits</option>
        <option>Mikayla</option>
        <option>Ohvola</option>
        <option>Shopsassydream</option>
        <option>Fayth</option>
        <option>MGP</option>
        <option>Fash Mob</option>
        <option>Hollyhoque</option>
        <option>Blairwears</option>
        <option>Lbrlabel</option>
        <option>6styleco</option>
        <option>MGP</option>
      
      </select>
    </div>
  );
};

export default DropDown;
