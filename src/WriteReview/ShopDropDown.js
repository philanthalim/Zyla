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
        <option>Young Hungry Free</option>
        <option>Runway Bandits</option>
        <option>Mikayla</option>
        <option>Ohvola</option>
        <option>MDS</option>
        <option>Fayth</option>
        <option>MGP</option>
        <option>Fash Mob</option>
        <option>Hollyhoque</option>
        <option>Blairwears</option>
        <option>Lbrlabel</option>
        <option>6styleco</option>
        <option>MGP</option>
        <option>Closet Lover</option>
        <option>Tinsel Rack</option>
        <option>Willow Label</option>
        <option>Hervelvetvase</option>
        <option>Loveandbravery</option>
        <option>Editors Market</option>
        <option>Wardrobemess</option>
        <option>Modparade</option>
      </select>
    </div>
  );
};

export default DropDown;
