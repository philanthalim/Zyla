import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router";
import lovet from "../images/LB3.jpeg";
import Footer from "../components/Footer";
import Loader from "react-loader-spinner";

const ViewShop = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const shop = location.state.shop; //get query state from SearchResults Routing
  const [reviews, setReviewsList] = useState([]);

  const fetchReviews = async () => {
    await Axios.get(`https://zyla-app.herokuapp.com/api/reviews/${shop}`)
      .then((res) => setReviewsList(res.data))
      .then(() => setLoading(false));
  };

  //Add function below,can't use hooks to update Avg Rating
  //Received NaN initially as state wasn't updated
  const calculate = () => {
    let sum = 0;
    let averageRating = 0;
    for (let i in reviews) {
      sum += reviews[i].rating;
    }
    averageRating = sum / reviews.length;
    return isNaN(averageRating) ? (
      ""
    ) : (
      <span>({averageRating.toFixed(1)})</span>
    );
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      <div className="search-header-container">
        <img className="search-header-img" src={lovet} alt="lovet"></img>
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <h3 className="overlay-header">{shop}</h3>
          <h3 className="overlay-sub-header">
            {reviews.length} Reviews {calculate()}
          </h3>
        </div>
      </div>

      <div>
        <div style={{ height: "15px" }}></div>
        {loading ? (
          <div
            style={{
              minHeight: "30vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <Loader type="Bars" color="#ed81a1" height={40} width={40} />
          </div>
        ) : reviews.length === 0 ? (
          reviews.length === 0 ? (
            <div
              style={{
                fontSize: "1.2rem",
                minHeight: "30vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <p>No reviews yet!</p>
              <p>Be the first to leave a review ;) !</p>
            </div>
          ) : (
            <> </>
          )
        ) : (
          reviews.map((item) => (
            <div key={item.comment} className="rating-container">
              <div className="rating-container-1">
                <p>{item.item.toUpperCase()}</p>
                <p style={{}}>{item.rating}.0</p>
              </div>
              <div className="rating-container-2">
                <p>{item.comment}</p>
                <img className="user-img" src={item.image} alt="userImg"></img>
                <p>Reviewed on {item.dateCreated.slice(3, 15)}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ViewShop;
