import React, { useContext } from "react";
import { ReviewContext } from "../context";

const CommentReview = () => {
  const { setComment } = useContext(ReviewContext);

  const onHandleChange = (e) => {
    setComment(e.target.value);
  };

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
        required
        maxLength={200}
        onChange={(e) => onHandleChange(e)}
        className="text-area"
        placeholder="Write about your experience! You can talk about the fit, comfort and quality of the item!"
      ></textarea>
    </div>
  );
};

export default CommentReview;
