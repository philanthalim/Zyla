import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p className='zyla'
          style={{
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
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
