//import logo from './logo.svg';
import "./App.css";
import HomeNavBar from "./components/HomeNavBar";
import OtherNavBar from "./components/OtherNavBar";
import Home from "./Home/Home";
import Submitted from "./SubmittedPage/Submitted";
import SearchResults from "./SearchResults/SearchResults";
import WriteReview from "./WriteReview/WriteReview";
import ViewShop from "./ViewShopPage/ViewShop";
import ScrollToTop from "./components/ScrollToTop";
import About from "./AboutUs/About";
import "./styles/About.css";
import "./styles/SearchResults.css";
import "./styles/Home.css";
import "./styles/Review.css";
import "./styles/ViewShop.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ReviewContext } from "./context";
import { useState } from "react";

function App() {
  const [shop, setShop] = useState("Love Bonito");
  const [category, setCategory] = useState("Tops");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");

  const HomeNavbar = ({ exact, path, component: Component, ...rest }) => {
    return (
      <Route
        exact={exact}
        path={path}
        {...rest}
        render={(routeProps) => {
          return (
            <>
              <HomeNavBar {...routeProps} />
              <Component {...routeProps} />
            </>
          );
        }}
      />
    );
  };
  const OtherNavbar = ({ exact, path, component: Component, ...rest }) => {
    return (
      <Route
        exact={exact}
        path={path}
        {...rest}
        render={(routeProps) => {
          return (
            <>
              <OtherNavBar {...routeProps} />
              <Component {...routeProps} />
            </>
          );
        }}
      />
    );
  };
  return (
    <ReviewContext.Provider
      value={{
        shop,
        setShop,
        category,
        setCategory,
        rating,
        setRating,
        comment,
        setComment,
      }}
    >
      <Router>
        <ScrollToTop />
        <Switch>
          <HomeNavbar exact path="/" component={Home} />
          <OtherNavbar exact path="/submitted" component={Submitted} />
          <OtherNavbar
            component={SearchResults}
            exact
            path="/search/:shop"
          ></OtherNavbar>
          <OtherNavbar exact path="/rate" component={WriteReview}></OtherNavbar>
          <OtherNavbar exact path="/about" component={About}></OtherNavbar>
          <OtherNavbar
            component={ViewShop}
            exact
            path="/view-shop/:shop"
          ></OtherNavbar>
        </Switch>
      </Router>
    </ReviewContext.Provider>
  );
}

export default App;
