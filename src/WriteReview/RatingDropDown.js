import React from "react";
import { useDispatch, useSelector, connect } from "react-redux";

const RatingDropDown = (props) => {
  const dispatch = useDispatch();

  const onSelect = (e) => {
    dispatch({
      type: "UPDATE_STATE",
      data: { rating: e.target.value },
    });
  };

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
        <select
          className="rate-select"
          value={props.rating}
          onChange={(e) => onSelect(e)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { rating: state.rating };
}

export default connect(mapStateToProps)(RatingDropDown);
