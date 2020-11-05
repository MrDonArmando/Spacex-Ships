import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  screen,
} from "test-utils";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import ShipsList, { SHIPS_QUERY } from "./index";

const apolloMocks = [
  {
    request: {
      query: SHIPS_QUERY,
    },
    result: {
      data: {
        ships: [
          { id: 1, name: "GO Something" },
          { id: 2, name: "ISLY" },
        ],
      },
    },
  },
];

// screen.debug();

it("renders ShipsList correctly", () => {
  // How to test a component which renders list of components?

  const { container } = render(<ShipsList />, {
    apolloMocks,
  });


});
