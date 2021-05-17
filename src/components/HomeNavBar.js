import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const HomeNavBar = () => {
  return (
    <div className="nav-bar-container-home">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p className="zyla-home">ZYLA</p>
      </Link>
    </div>
  );
};

export default HomeNavBar;
