import React, { useContext } from "react";
import { ReviewContext } from "../context";

const CategoryDropDown = () => {
  const { setCategory } = useContext(ReviewContext);
  const onSelect = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="shop-cat-dd-container">
      <p style={{ marginRight: "20px" }}>
        Select{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Category</span>
      </p>
      <select className="shop-cat-select" onChange={(e) => onSelect(e)}>
        <option>Tops</option>
        <option>Bottoms</option>
        <option>Accessories</option>
        <option>Footwear</option>
        <option>One-piece</option>
      </select>
    </div>
  );
};

export default CategoryDropDown;
