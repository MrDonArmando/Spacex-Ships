import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";
import store from "../redux/store";
import { MockedProvider as ApolloMockedProvider } from "@apollo/client/testing";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

const render = (ui, { apolloMocks = [], ...renderOptions } = {}) => {
  function Wrapper({ children }) {
    const history = createMemoryHistory();
    return (
      <ReduxProvider store={store}>
        <ApolloMockedProvider mocks={apolloMocks} addTypename={false}>
          <Router history={history}>{children}</Router>
        </ApolloMockedProvider>
      </ReduxProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from "@testing-library/react";

export { render };
