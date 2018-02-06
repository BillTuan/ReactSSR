import Home from "./containers/HomeContainer";
import UsersList from "./containers/UsersListContainer";

export default [
  {
    ...Home,
    path: "/",
    exact: true
  },
  {
    ...UsersList,
    path: "/users"
  }
];
