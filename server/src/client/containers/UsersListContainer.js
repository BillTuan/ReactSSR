import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchUsers } from "../actions";

class UsersList extends Component {
  static propTypes = {
    fetchUsers: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(PropTypes.object).isRequired
  };

  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => <li key={id}>{name}</li>);
  }
  render() {
    return (
      <div>
        Here us a big list of users:
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(({ users }) => ({ users }), { fetchUsers })(UsersList)
};
