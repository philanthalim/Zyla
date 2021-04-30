import React from "react";
import LB1 from "../images/colors.jpeg";
import Footer from "../components/Footer";
import HomeThree from "./HomeThree";
import HomeTwo from "./HomeTwo";
import HomeOne from "./HomeOne";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const submitQuery = () => {
    history.push({
      pathname: `/search/${query.replace(/\s+/g, "-").toLowerCase()}`,
      state: { query: query },
    }); //navigate to searchResults after clicking enter
  };
  //console.log(query);
  return (
    <div>
      <div className="home-img-container">
        <img className="home-img" src={LB1} alt="BlogShopImg"></img>
        <div className="home-layover">
          <h3 className="home-header1">A better way to make decisions</h3>
          <form onSubmit={submitQuery}>
            <input
              onChange={(e) => setQuery(e.target.value)}
              className="search-box"
              type="search"
              placeholder={"Search for BlogShops"}
            ></input>
          </form>
          <Link to={"/rate"} style={{ textDecoration: "none", color: "black" }}>
            <p className="home-header2">Write a review</p>
          </Link>
        </div>
      </div>
      <HomeOne />
      <HomeTwo />
      <HomeThree />
      <Footer />
    </div>
  );
};

export default Home;
