import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import SearchPage from "./Components/SearchPage/SearchPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
