import React from "react";
import LB from "./LB.png";
import mgp from "./mgp.png";
import fashmob from "./fashmob.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const HomeTwo = () => {
  let popularList = [
    { shopName: "Love Bonito", img: LB },
    { shopName: "Fash Mob", img: fashmob },
    { shopName: "MGP", img: mgp },
  ];
  return (
    <div className="section-two">
      <Fade bottom>
        <h3 style={{ fontSize: "2rem" }}>Most Reviewed Blogshops</h3>
      </Fade>
  
        <div className="bottom">
          {popularList.map((shop) => (
            <div className="bottom-div">
              <Link
                to={{
                  pathname: `/view-shop/${shop.shopName
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`,
                  state: { shop: shop.shopName },
                }}
              >
                <img
                  className="s2-image"
                  src={shop.img}
                  alt="BlogShopImg"
                ></img>
              </Link>
              <h4 style={{ fontSize: "1.3rem" }}>{shop.shopName}</h4>
              <p>5 reviews</p>
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default HomeTwo;
