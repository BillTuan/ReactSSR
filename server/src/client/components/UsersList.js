import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions";

class UsersList extends Component {
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
        <ul>{this.renderUsers}</ul>
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), { fetchUsers })(UsersList);
