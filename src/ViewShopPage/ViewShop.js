import React from "react";
import lovet from "../images/lovetPink2.jpeg";
//import { useLocation } from "react-router-dom";
const ViewShop = () => {
  //const { shopName } = useLocation();
  const img =
    "https://images.unsplash.com/photo-1594036436267-2750a8ab2ae2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5NHxTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
  const list = [
    {
      title: "Duplicate Pants",
      category: "Bottoms",
      image:
        "https://images.unsplash.com/photo-1558769132-92e717d613cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
      comment: "hellofbskvskdjv jsbkjdbvjksdvbsjvk",
      rating: 3,
      date: "21 Apr",
    },
    {
      title: "Koreen Dress",
      category: "Top",
      image: img,
      comment: "bad quality...Don't buy!!",
      rating: 1,
      date: "30 Apr",
    },
    {
      title: "Love Bracelet",
      category: "Accessories",
      image: img,
      comment: "Awesome!!! Best top ever! super comfy and the fit is great",
      rating: 9,
      date: "3 Mar",
    },
  ];
  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>Search Results</h3>
      </div>
      <div style={{}}>
        {list.map((item) => (
          <div className="rating-container">
            <div
              style={{ display: "flex", fontWeight: "bold", fontSize: "1rem" }}
            >
              <p>Title: {item.title}</p>
              <p style={{ marginLeft: "30px" }}>Category: {item.category}</p>
              <p style={{ alignSelf: "flex-end", marginLeft: "30px" }}>
                Rating: {item.rating}
              </p>
            </div>
            <p>{item.comment}</p>
            <img className="user-img" src={item.image} alt="userImg"></img>
            <p>Reviewed on {item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewShop;
