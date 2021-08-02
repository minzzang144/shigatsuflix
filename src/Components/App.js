import React, { Component } from "react";
import Router from "components/Router";
import GlobalStyles from "components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
