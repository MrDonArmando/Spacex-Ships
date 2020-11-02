import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";
import Ships from "./screens/Ships";

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <Redirect to="/ships" />
        </Route>
        <Route exact path={["/ships", "/ships/:shipID"]}>
          <Ships />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

export default App;
