import React from "react";

const RatingDropDown = () => {
  return (
    <div>
      <div className="rate-container">
        <p style={{ marginRight: "20px" }}>
          Rate your{" "}
          <span style={{ color: "#e892ad", fontWeight: "bold" }}>
            experience{" "}
          </span>
          out of 10
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
