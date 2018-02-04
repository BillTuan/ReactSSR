import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
/* eslint no-undef: 0 */
ReactDOM.hydrate(<App />, document.querySelector("#root"));
