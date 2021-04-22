import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/lovetPink2.jpeg";
import ShopDropDown from "../components/Review/ShopDropDown";
import CategoryDropDown from "../components/Review/CategoryDropDown";
import RatingDropDown from "../components/Review/RatingDropDown";
import CommentReview from "../components/Review/CommentReview";

const WriteReview = () => {
  return (
    <div>
      <div className="review-one-div">
        <img className="review-one-image" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>Write a Review</h3>
      </div>
      <div className="review-two-div">
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
          <input className="review-input"></input>
        </div>
        <RatingDropDown />
        <CommentReview />
      </div>
      <Footer />
    </div>
  );
};

export default WriteReview;
