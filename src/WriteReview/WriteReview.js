import React, { useState } from "react";
import Footer from "../components/Footer";
import lovet from "../images/lovetPink2.jpeg";
import ShopDropDown from "./ShopDropDown";
import CategoryDropDown from "./CategoryDropDown";
import RatingDropDown from "./RatingDropDown";
import CommentReview from "./CommentReview";
import Axios from "axios";
import Resizer from "react-image-file-resizer";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, connect } from "react-redux";

const WriteReview = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [item, setItem] = useState("");
  const [image, setImage] = useState(
    "https://images.pexels.com/photos/3910065/pexels-photo-3910065.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
  );

  const handleImage = (e) => {
    const file = e.target.files[0];
    resize(file);
  };

  const resize = (image1) => {
    Resizer.imageFileResizer(
      image1,
      250,
      250,
      "JPEG",
      100,
      0,
      (uri) => {
        setImage(uri);
      },
      "base64"
    );
  };
  const submitReview = () => {
    try {
      Axios.post("https://zyla-app.herokuapp.com/api/reviews", {
        item: item,
        category: props.category,
        shop: props.shop,
        rating: props.rating,
        comment: props.comment,
        image: image,
      });
      dispatch({
        type: "RESET_STATE",
        data: { comment: "", rating: 1, shop: "Love Bonito", category: "Tops" },
      });
    } catch (error) {
      alert(error);
    }
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
          <input
            style={{ marginTop: "20px", marginBottom: "20px" }}
            type="file"
            name="photo"
            accept="image/*"
            onChange={(e) => handleImage(e)}
          ></input>
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

function mapStateToProps(state) {
  return {
    category: state.category,
    shop: state.shop,
    comment: state.comment,
    rating: state.rating,
  };
}

export default connect(mapStateToProps)(WriteReview);
