import React from "react";
import { useState } from "react";

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
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default CommentReview;
