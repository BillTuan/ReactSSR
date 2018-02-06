import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import thunk from "redux-thunk";
import reducers from "./reducers";
import Routes from "./Routes";

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);
/* eslint no-undef: 0 */
ReactDOM.hydrate(<App />, document.querySelector("#root"));
