import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p
          style={{
            fontSize: "1.6rem",
            color: "#E892AD",
            fontWeight: "bold",
            marginLeft: "20px",
          }}
        >
          No<span style={{ color: "black" }}>Filter</span>
        </p>
      </Link>
    </div>
  );
};

export default NavBar;
