import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer";
import lovet from "../images/lovetSubmitted.jpeg";
import { Link } from "react-router-dom";
import { shopList, shopImage } from "./ResultsFunctions";

const SearchResults = () => {
  const [resultsList, setResultsList] = useState([]);
  const location = useLocation();
  const queryShop = location.state.query;
  const filterShops = () => {
    const newList = shopList.filter((item) =>
      item.toLowerCase().includes(queryShop.toLowerCase())
    );
    setResultsList(newList);
  };
  useEffect(() => {
    filterShops();
  }, []);

  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>
          {resultsList.length} Search Results for '{queryShop}'
        </h3>
      </div>
      {resultsList.map((shop) => (
        <Link
          to={{
            pathname: `/view-shop/${shop.replace(/\s+/g, "-").toLowerCase()}`,
            state: { shop: shop },
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="list-search-container">
            <img className="list-search-img" alt="" src={shopImage(shop)}></img>
            <p style={{ marginLeft: "20px" }}>{shop}</p>
          </div>
        </Link>
      ))}
      <div style={{ height: "40vh" }}></div>
      <Footer />
    </div>
  );
};

export default SearchResults;
