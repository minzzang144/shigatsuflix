import React, { Component } from "react";
import Router from "Router";
import GlobalStyles from "components/GlobalStyles";
import { TmdbProvider } from "contexts/tmdbContext";

class App extends Component {
  render() {
    return (
      <TmdbProvider>
        <Router />
        <GlobalStyles />
      </TmdbProvider>
    );
  }
}

export default App;
