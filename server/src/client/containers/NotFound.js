import React from "react";
import PropTypes from "prop-types";

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Opps, page not found!</h1>;
};

NotFound.propTypes = {
  staticContext: PropTypes.shape().isRequired
};

export default { component: NotFound };
