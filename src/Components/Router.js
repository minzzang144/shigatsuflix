import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "../Routes/Movie";
import Movie from "../Routes/Movie";
import TV from "../Routes/TV";
import Search from "../Routes/Search";
import Detail from "../Routes/Detail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie" exact component={Movie} />
        <Route path="/show" exact component={TV} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={Detail} />
        <Route path="/show/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
