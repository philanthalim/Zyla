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
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
    </div>
  );
};

export default RatingDropDown;
