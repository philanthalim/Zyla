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
          yourself, so that consumers can make well-informed decisions in the vast online shopping landscape.
        </p>
        <p>
          It all started when I was scrolling through Instagram and came across
          an account providing unfiltered reviews for the items she had gotten
          from local shops. I felt that it was a great idea and as days passed,
          I noticed that more people were following her account and even
          commenting on her posts. Which goes to show that consumers are
          actively looking for raw reviews. In an era where brand engagements is
          a norm, it is not easy for consumers to find out the true quality of
          items being sold. I love fashion and shopping on local shops but there
          are times when items have fallen short of my expectations. I once
          bought a dress from a Facebook live held by one of the blog shops as
          the 'influencer' commented that it's suitable for taller ladies.
          However, it was too short for me! My height is 1.7m and the dress
          could barely cover my bottom. Frustrated with such experiences, I
          combined my love for fashion and coding to provide a platform for
          unfiltered reviews. I hope that more people will come forward to leave
          their honest feedback on Zyla so that paying customers can make better
          decisons and be satisfied with their purchases.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
