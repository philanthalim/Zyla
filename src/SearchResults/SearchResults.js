import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Footer from "../components/Footer";
import lovet from "../images/lovetSubmitted.jpeg";
import { Link } from "react-router-dom";

const SearchResults = () => {
  let shopList = [
    "Lovet",
    "Love Bonito",
    "Mikayla",
    "Neonmello",
    "Topazette",
    "Supergurl",
    "Fayth",
    "MGP",
    "Fash Mob",
    "Hollyhoque",
    "MDS",
    "Ohvola",
    "6styleco",
    "Blairwears",
    "Lbrlabel",
    "Willow Label",
    "Wardrobemess",
    "Modparade",
    "Closet Lover",
    "Editors Market",
    "Tinsel Rack",
    "Klarra",
    "Loveandbravery",
    "Hervelvetvase",
    "Carrislabelle",
    "Runway Bandits",
    "Young Hungry Free",
  ];
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

  const shopImage = (shop) => {
    let image =
      "https://images.unsplash.com/photo-1565515695526-93d8688db6ba?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3N3xTNE1LTEFzQkI3NHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    if (shop === "Lovet") {
      image =
        "data:image/png;base64,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";
    } else if (shop === "Love Bonito") {
      image =
        "https://media-exp1.licdn.com/dms/image/C510BAQHXBnsJ98aQew/company-logo_200_200/0/1558674414805?e=2159024400&v=beta&t=_K7mt9osvxt_9vs9k5zQISEKUhNTdoSrbBsCGdL07_s";
    } else if (shop === "MGP") {
      image =
        "https://s3-ap-southeast-1.amazonaws.com/s3.loopme.my/img/newos/brands/2x/iP5FDs6hxGTZEf0p.png";
    } else if (shop === "Fayth") {
      image =
        "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.18169-9/10458352_740069446050743_5956947963399280155_n.png?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lN-eU0bJcloAX_IE3UI&_nc_ht=scontent.fsin2-1.fna&oh=00a24a0006afc0141e86e2a673328938&oe=60A7BD1C";
    } else if (shop === "Mikayla") {
      image =
        "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.6435-9/67685756_437726993489265_907378314488840192_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=u8IneczKKpAAX88Sfhe&_nc_ht=scontent.fsin2-1.fna&oh=d1101bf92ab43bd285d04e0d0455168e&oe=60A6A4DC";
    } else if (shop === "FashMob") {
      image =
        "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.18169-9/970307_562902737081056_1038139852_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lXltRozfwjwAX8_dAHM&_nc_ht=scontent.fsin2-1.fna&oh=54f2ad073c20a21df845431a846ca664&oe=60A5FDAF";
    } else if (shop === "Supergurl") {
      image =
        "https://scontent.fsin2-1.fna.fbcdn.net/v/t1.18169-9/10426333_10153139475180465_4537922641551804275_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=eZRRw_SfsE8AX_rWhbr&_nc_ht=scontent.fsin2-1.fna&oh=635c0eca66315e730c0303bd5f07931c&oe=60A8D134";
    } else if (shop === "Ohvola") {
      image =
        "data:image/png;base64,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";
    } else if (shop === "Topazette") {
      image =
        "data:image/png;base64,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";
    } else if (shop === "Neonmello") {
      image =
        "data:image/png;base64,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";
    } else if (shop === "Mikayla") {
      image =
        "data:image/png;base64,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";
    }
    return image;
  };
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
