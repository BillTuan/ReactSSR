import App from "./App";
import Home from "./containers/HomeContainer";
import UsersList from "./containers/UsersListContainer";
import NotFound from "./containers/NotFound";

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
      },
      {
        ...NotFound
      }
    ]
  }
];
