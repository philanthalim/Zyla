import React from "react";

const RatingDropDown = () => {
  return (
    <div>
      <div className="rate-div">
        <p style={{ marginRight: "20px" }}>
          Rate the{" "}
          <span style={{ color: "#e892ad", fontWeight: "bold" }}>fit </span>
          out of 5
        </p>
        <select className="rate-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="rate-div">
        <p style={{ marginRight: "20px" }}>
          Rate the{" "}
          <span style={{ color: "#e892ad", fontWeight: "bold" }}>comfort </span>{" "}
          out of 5
        </p>
        <select className="rate-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="rate-div">
        <p style={{ marginRight: "20px" }}>
          Rate the{" "}
          <span style={{ color: "#e892ad", fontWeight: "bold" }}>quality </span>{" "}
          out of 5
        </p>
        <select className="rate-select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  );
};

export default RatingDropDown;
