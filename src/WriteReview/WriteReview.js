import React, { useState, useContext } from "react";
import { ReviewContext } from "../context";
import Footer from "../components/Footer";
import lovet from "../images/lovetPink2.jpeg";
import ShopDropDown from "./ShopDropDown";
import CategoryDropDown from "./CategoryDropDown";
import RatingDropDown from "./RatingDropDown";
import CommentReview from "./CommentReview";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const WriteReview = () => {
  const history = useHistory();
  const [item, setItem] = useState("");
  const { shop, category, rating, comment } = useContext(ReviewContext);

  const submitReview = () => {
    Axios.post("https://zyla-app.herokuapp.com/api/reviews", {
      item: item,
      category: category,
      shop: shop,
      rating: rating,
      comment: comment,
      image:
        "https://images.unsplash.com/photo-1619596658767-f3bbb82b0dee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    });
  };
  const submitForm = () => {
    submitReview();
    history.push("/submitted");
  };
  return (
    <div>
      <div className="review-one-div">
        <img className="review-one-image" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>Write a Review</h3>
      </div>
      <div className="review-two-div">
        <form onSubmit={submitForm}>
          <h1 className="review-two-header">
            Write a <span style={{ color: "#e892ad" }}>Review</span>
          </h1>
          <ShopDropDown />
          <CategoryDropDown />
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <p>Item Name</p>
            <input
              required
              onChange={(e) => setItem(e.target.value)}
              className="review-input"
            ></input>
          </div>
          <RatingDropDown />
          <CommentReview />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default WriteReview;
