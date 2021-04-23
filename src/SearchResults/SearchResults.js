import React from "react";
import Footer from "../components/Footer";
import lovet from "../images/lovetSubmitted.jpeg";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const list = [
    { shop: "Lovet", reviews: 5 },
    { shop: "LoveBonito", reviews: 10 },
    { shop: "FashMob", reviews: 5 },
    { shop: "Mikayla", reviews: 5 },
  ];

  const shopImage = (shop) => {
    let image =
      "https://images.unsplash.com/photo-1565515695526-93d8688db6ba?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    if (shop.shop === "Lovet") {
      image =
        "data:image/png;base64,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";
    } else if (shop.shop === "LoveBonito") {
      image =
        "https://media-exp1.licdn.com/dms/image/C510BAQHXBnsJ98aQew/company-logo_200_200/0/1558674414805?e=2159024400&v=beta&t=_K7mt9osvxt_9vs9k5zQISEKUhNTdoSrbBsCGdL07_s";
    } else if (shop.shop === "MGP") {
      image =
        "https://s3-ap-southeast-1.amazonaws.com/s3.loopme.my/img/newos/brands/2x/iP5FDs6hxGTZEf0p.png";
    } else if (shop.shop === "FaythLabel") {
      image =
        "https://i.pinimg.com/280x280_RS/4a/c2/1e/4ac21e942dfad28c9f9872b4f59aaf67.jpg";
    } else if (shop.shop === "Mikayla") {
      image =
        "https://d3991d7jsoecwn.cloudfront.net/sites/files/mikayla/productimg/202104/600x900/DSC04723.jpg";
    } else if (shop.shop === "FashMob") {
      image =
        "https://map.capitaland.com/funan/infos/FUN/commonfiles/store/FUN_ST_LOGO_1596740165567.jpeg";
    } else if (shop.shop === "Supergurl") {
      image =
        "https://media.glassdoor.com/sqll/2508163/supergurl-squarelogo-1582616564454.png";
    } else if (shop.shop === "Ohvola") {
      image =
        "data:image/png;base64,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";
    } else if (shop.shop === "Topazette") {
      image =
        "data:image/png;base64,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";
    }
    return image;
  };
  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>Search Results</h3>
      </div>
      {list.map((shop) => (
        <Link
          to={`/view-shop/${shop.shop}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="list-search-container">
            <img className="list-search-img" alt="" src={shopImage(shop)}></img>
            <p style={{ marginLeft: "20px"}}>
              {shop.shop}
            </p>
          </div>
        </Link>
      ))}
      <div style={{ height: "40vh" }}></div>
      <Footer />
    </div>
  );
};

export default SearchResults;
