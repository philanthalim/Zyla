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
      <p
        style={{ fontSize: "1rem", fontStyle: "italic", color: "rgb(51,51,51" }}
      >
        Here's your chance to be specific and let others know what to expect!
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
