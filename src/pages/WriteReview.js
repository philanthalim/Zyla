import React from "react";
import Footer from "../components/Footer";

const WriteReview = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "rgba(236,167,189,0.8)",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "2rem",
          color: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <h3>Write a review</h3>
      </div>
      <div style={{ padding: "50px" }}>
        <p style={{ marginRight: "20px" }}>Select Blogshop</p>
        <select style={{ width: "300px" }}>
          <option>Love Bonito</option>
          <option>Lovet</option>
          <option>Shopsassydream</option>
          <option>Ohvola</option>
          <option>Supergurl</option>
          <option>Younghungryfree</option>
          <option>Carrislabelle</option>
          <option>MGP</option>
          <option>Runwaybandits</option>
          <option>Neonmello</option>
          <option>Mikalya</option>
          <option>Cheris</option>
          <option>MDS</option>
        </select>
        <p style={{ marginRight: "20px" }}>Category</p>
        <select style={{ width: "300px" }}>
          <option>Tops</option>
          <option>Bottoms</option>
          <option>Accessories</option>
          <option>Footwear</option>
        </select>
        <p>Item name</p>
        <input></input>
        <p style={{ marginRight: "20px" }}>Rate in terms of fit</p>
        <select style={{ width: "300px" }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p style={{ marginRight: "20px" }}>Rate in terms of comfort</p>
        <select style={{ width: "300px" }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p style={{ marginRight: "20px" }}>Rate in terms of quality</p>
        <select style={{ width: "300px" }}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <p>Write a Comment</p>
        <textarea placeholder="Write about your experience!"></textarea>
        <button>Submit</button>
      </div>
      <Footer />
    </div>
  );
};

export default WriteReview;
