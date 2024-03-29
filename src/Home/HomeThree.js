import React from "react";
import { Link } from "react-router-dom";
//import Fade from "react-reveal/Fade";

const HomeThree = () => {
  const list1 = [
    "Love Bonito",
    "Lovet",
    "Neonmello",
    "Supergurl",
    "Topazette",
    "Carrislabelle",
    "Modparade",
    "Hervelvetvase",
    "Klarra",
  ];

  const list2 = [
    "Runway Bandits",
    "Mikayla",
    "Ohvola",
    "MDS",
    "Fayth",
    "Willow Label",
    "Wardrobemess",
    "Editors Market",
    "Young Hungry Free",
  ];

  const list3 = [
    "Fash Mob",
    "Hollyhoque",
    "Blairwears",
    "Lbrlabel",
    "6styleco",
    "MGP",
    "Closet Lover",
    "Tinsel Rack",
    "Loveandbravery",
  ];
  return (
    <div className="section-three">
 
        <h2 className='browse'>
          Browse through reviews for 20+ blogshops
        </h2>
  

      <div
        style={{ fontSize: "0.9rem", flexDirection: "row", display: "flex" }}
      >
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            {list1.map((shop) => (
              <Link key={shop}
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
          </div>
        </div>
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            {list2.map((shop) => (
              <Link key={shop}
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
          </div>
        </div>
        <div
          style={{
            width: "33.33%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div>
            {list3.map((shop) => (
              <Link key={shop}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThree;
