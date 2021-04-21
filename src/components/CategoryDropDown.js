import React from "react";

const CategoryDropDown = () => {
  return (
    <div style={{ display: "flex", marginBottom: "20px" }}>
      <p style={{ marginRight: "20px" }}>
        Select{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Category</span>
      </p>
      <select className="shop-cat-select">
        <option>Tops</option>
        <option>Bottoms</option>
        <option>Accessories</option>
        <option>Footwear</option>
      </select>
    </div>
  );
};

export default CategoryDropDown;
