import React from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";

const App = ({ route }) => (
  <div>
    <Header />
    {renderRoutes(route.routes)}
  </div>
);

App.propTypes = {
  route: PropTypes.shape().isRequired
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
