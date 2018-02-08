import React from "react";
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
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Home
        </Link>
        <ul className="right">
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/admins">Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.shape()
};

Header.defaultProps = {
  auth: null
};
export default connect(({ auth }) => ({ auth }))(Header);
