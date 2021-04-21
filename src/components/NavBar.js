import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p
          style={{
            marginLeft: "3rem",
            fontSize: "1.6rem",
            color: "#E892AD",
            fontWeight: "bold",
            fontFamily: "Vidaloka",
          }}
        >
          NoFilter
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
