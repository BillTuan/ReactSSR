import App from "./App";
import Home from "./containers/HomeContainer";
import UsersList from "./containers/UsersListContainer";

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: "/",
        exact: true
      },
      {
        ...UsersList,
        path: "/users"
      }
    ]
  }
];
