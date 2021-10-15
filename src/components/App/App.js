import React, { Fragment } from "react";
import "normalize.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Home";
import Location from "../Location";
import About from "../About";
import Game from "../Game";
import Meme from "../Meme";
import Speech from "../Speech";
import Welcome from "../Welcome";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ display: "flex" }}>
            <Home />
            <Welcome />
          </div>
        </Route>
        <Route path="/location" component={Location} />
        <Route path="/speech" component={Speech} />
        <Route path="/game" component={Game} />
        <Route path="/meme" component={Meme} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
