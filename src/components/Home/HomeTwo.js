import React from "react";
import LB from "/Users/PhijuFile/Desktop/nofilter/client/src/images/LB.png";
import mgp from "/Users/PhijuFile/Desktop/nofilter/client/src/images/mgp.png";
import fashmob from "/Users/PhijuFile/Desktop/nofilter/client/src/images/fashmob.png";

const HomeTwo = () => {
  return (
    <div className="section-two">
      <h3 style={{ fontSize: "2rem" }}>Most Reviewed Blogshops</h3>
      <div className="bottom">
        <div className="bottom-div">
          <img className="s2-image" src={LB} alt="BlogShopImg"></img>
          <h4 style={{ fontSize: "1.3rem" }}>Love Bonito</h4>
          <p>30 reviews</p>
        </div>
        <div className="bottom-div">
          <img className="s2-image" src={fashmob} alt="BlogShopImg"></img>
          <h4 style={{ fontSize: "1.3rem" }}>Fash Mob</h4>
          <p>20 reviews</p>
        </div>
        <div className="bottom-div">
          <img className="s2-image" src={mgp} alt="BlogShopImg"></img>
          <h4 style={{ fontSize: "1.3rem" }}>MGP Label</h4>
          <p>36 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
