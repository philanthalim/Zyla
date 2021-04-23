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
        "https://d1ctous5gg780z.cloudfront.net/sites/files/younghungryfree/productimg/202103/DSC00288.jpg",
      comment:
        "Don't get the hype around this pants.. cutting is so off and material feels scratchy!",
      rating: 3,
      date: "21 Apr",
    },
    {
      title: "Koreen Dress",
      category: "One-piece",
      image:
        "https://media.karousell.com/media/photos/products/2021/2/4/yhf_last_minute_dress_in_myrtl_1612457601_b68fccef.jpg",
      comment: "bad quality...Don't buy!!",
      rating: 1,
      date: "30 Apr",
    },
    {
      title: "Cami Top",
      category: "Tops",
      image:
        "https://d1ctous5gg780z.cloudfront.net/sites/files/younghungryfree/productimg/202102/IMG_7560.jpg",
      comment: "Awesome!!! Best top ever! super comfy and the fit is great",
      rating: 9,
      date: "3 Mar",
    },
  ];
  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>
          Younghungryfree
        </h3>
      </div>
      <div style={{}}>
        {list.map((item) => (
          <div className="rating-container">
            <div
              style={{
                display: "flex",
                fontWeight: "bold",
                fontSize: "1.2rem",
                justifyContent: "space-between",
              }}
            >
              <p>{item.title.toUpperCase()}</p>
              <p style={{}}>{item.rating}.0</p>
            </div>
            <p style={{ marginTop: "-3px", fontSize: "1.1rem" }}>
              {item.comment}
            </p>
            <img className="user-img" src={item.image} alt="userImg"></img>
            <p style={{ color: "grey", fontSize: "1rem" }}>
              Reviewed on {item.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewShop;
