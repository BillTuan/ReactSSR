import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchAdmins } from "../actions";

class AdminsList extends Component {
  static propTypes = {
    admins: PropTypes.arrayOf(PropTypes.object).isRequired,
    fetchAdmins: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map(({ id, name }) => <li key={id}>{name}</li>);
  }
  render() {
    return (
      <div>
        <h3>Protected list of Admins</h3>
        <div>{this.renderAdmins()}</div>
      </div>
    );
  }
}

export default {
  component: connect(({ admins }) => ({ admins }), { fetchAdmins })(AdminsList),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
