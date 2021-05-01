//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
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
import "./styles/NavBar.css";
import "./styles/Footer.css";
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
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/submitted">
            <Submitted />
          </Route>
          <Route component={SearchResults} exact path="/search/:shop"></Route>
          <Route exact path="/rate">
            <WriteReview />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route component={ViewShop} exact path="/view-shop/:shop"></Route>
        </Switch>
      </Router>
    </ReviewContext.Provider>
  );
}

export default App;
