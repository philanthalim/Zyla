import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const OtherNavBar = () => {
  return (
    <div className="nav-bar-container-other">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p className="zyla-other">ZYLA</p>
      </Link>
    </div>
  );
};

export default OtherNavBar;
