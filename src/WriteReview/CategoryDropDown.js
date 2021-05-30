import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const CategoryDropDown = (props) => {
  const dispatch = useDispatch();

  const onSelect = (e) => {
    dispatch({
      type: "UPDATE_STATE",
      data: { category: e.target.value },
    });
  };

  return (
    <div className="shop-cat-dd-container">
      <p style={{ marginRight: "20px" }}>
        Select{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Category</span>
      </p>
      <select
        className="shop-cat-select"
        value={props.category}
        onChange={(e) => onSelect(e)}
      >
        <option>Tops</option>
        <option>Bottoms</option>
        <option>Accessories</option>
        <option>Footwear</option>
        <option>One-piece</option>
      </select>
    </div>
  );
};

function mapStateToProps(state) {
  return { category: state.category };
}

export default connect(mapStateToProps)(CategoryDropDown);
