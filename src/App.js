import React from "react";
import { ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Ships from "./screens/Ships";
import apolloClient from "./apollo-client"

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <Router basename="/Spacex-Ships">
          <Route exact path="/">
            <Redirect to="/ships" />
          </Route>
          <Route exact path={["/ships", "/ships/:shipID"]}>
            <Ships />
          </Route>
        </Router>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
