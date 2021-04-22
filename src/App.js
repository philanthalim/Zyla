//import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./Home/Home";
import Submitted from "./SubmittedPage/Submitted";
import SearchResults from "./SearchResults/SearchResults";
import WriteReview from "./WriteReview/WriteReview";
import ViewShop from "./ViewShopPage/ViewShop";
import ScrollToTop from "./components/ScrollToTop";
import "./styles/Home.css";
import "./styles/NavBar.css";
import "./styles/Footer.css";
import "./styles/Review.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
        <Route exact path="/search">
          <SearchResults />
        </Route>
        <Route exact path="/rate">
          <WriteReview />
        </Route>
        <Route exact path="/view-shop/:shop">
          <ViewShop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
