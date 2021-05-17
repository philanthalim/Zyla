import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p
          style={{
            fontSize: "1.7rem",
            color: "black",
            fontWeight: "bold",
            marginLeft: "35px",
            fontFamily: "Vogue",
          }}
        >
          ZYLA
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
