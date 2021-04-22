import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommentReview = () => {
  const [comment, setComment] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>
        Write a{" "}
        <span style={{ color: "#e892ad", fontWeight: "bold" }}>Comment </span>
      </p>
      <textarea
        onChange={(e) => setComment(e.target.value)}
        className="text-area"
        placeholder="Write about your experience!"
      ></textarea>
      <Link style={{ textDecoration: "none" }} to={"/submitted"}>
        <button className="submit-btn">Submit</button>
      </Link>
    </div>
  );
};

export default CommentReview;
