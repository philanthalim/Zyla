import React from "react";
import Footer from "../components/Footer";
import lovet from "./lovetChamp.jpeg";

const About = () => {
  return (
    <div style={{ minHeight: "50vh" }}>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <h3 style={{ position: "absolute", color: "white" }}>About Zyla</h3>
      </div>
      <div className="about-container">
        <h3>Real Reviews</h3>
        <p>
          At Zyla, we offer access to real reviews from paying customers like
          yourself, so that consumers can make well-informed decisions in the
          vast online shopping landscape.
        </p>
        <p>
          The act of buying stuff online often comes with the issue of
          misrepresentation of item. Oftentimes, pictures are heavily edited and
          may not reflect the true condition. Brand engagements is a norm now
          and it is difficult to ascertain the true quality/fit of clothes sold
          online. A certain dress may look good on Influencer A but that doesn't
          neccesarily mean that it will look good on you. I thought there had to
          be a way to bridge the online to offline retail gap and so I decided
          to build Zyla for consumers to make more confident decisons.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
