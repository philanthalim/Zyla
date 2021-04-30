import React from "react";
import { Link } from "react-router-dom";

const HomeThree = () => {
  const list1 = [
    "Love Bonito",
    "Lovet",
    "Neonmello",
    "Supergurl",
    "Topazette",
    "Carrislabelle",
  ];

  const list2 = [
    "Runwaybandits",
    "Mikayla",
    "Ohvola",
    "Shopsassydream",
    "Fayth",
    "TheWillowLabel",
  ];

  const list3 = [
    "Fash Mob",
    "Hollyhoque",
    "Blairwears",
    "Lbrlabel",
    "6styleco",
    "MGP",
  ];
  return (
    <div className="section-three">
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
        Browse through reviews from 30+ blogshops
      </h2>
      <div
        style={{
          flexDirection: "row",
          backgroundColor: "null",
          justifyContent: "space-evenly",
          display: "flex",
        }}
      >
        <ul style={{ width: "100px" }}>
          {list1.map((shop) => (
            <Link
              style={{
                lineHeight: "60px",
                display: "flex",
                textDecoration: "none",
                color: "black",
              }}
              to={{
                pathname: `/view-shop/${shop
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
                state: { shop: shop },
              }}
            >
              {shop}
            </Link>
          ))}
        </ul>
        <ul style={{ width: "100px" }}>
          {list2.map((shop) => (
            <Link
              style={{
                lineHeight: "60px",
                display: "flex",
                textDecoration: "none",
                color: "black",
              }}
              to={{
                pathname: `/view-shop/${shop
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
                state: { shop: shop },
              }}
            >
              {shop}
            </Link>
          ))}
        </ul>
        <ul style={{ width: "100px" }}>
          {list3.map((shop) => (
            <Link
              style={{
                lineHeight: "60px",
                display: "flex",
                textDecoration: "none",
                color: "black",
              }}
              to={{
                pathname: `/view-shop/${shop
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`,
                state: { shop: shop },
              }}
            >
              {shop}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomeThree;
