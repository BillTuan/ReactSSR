import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};

Header.propTypes = {
  auth: PropTypes.shape()
};

Header.defaultProps = {
  auth: null
};
export default connect(({ auth }) => ({ auth }))(Header);
