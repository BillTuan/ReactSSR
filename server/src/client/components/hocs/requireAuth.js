import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export default ChildComponent => {
  class RequireAuth extends Component {
    render() {
      switch (this.props.auth) {
        case null:
          return <Redirect to="/" />;
        default:
          return <ChildComponent {...this.props} />;
      }
    }
  }
  return connect(({ auth }) => ({ auth }))(RequireAuth);
};
