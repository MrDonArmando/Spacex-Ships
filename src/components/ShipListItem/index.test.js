import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  screen,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShipListItem from "./index";
import { BrowserRouter as Router, Route } from "react-router-dom";

it("renders ShipListItem correctly", () => {
  const { container, getByText } = render(
    <Router>
      <Route>
        <ShipListItem ship={{ id: 1, name: "Some ship" }} isSelected={true} />
      </Route>
    </Router>
  );
  expect(getByText("Some ship")).toBeInTheDocument();

  expect(screen.queryByText("Other ship")).not.toBeInTheDocument();

  expect(container.firstChild).toHaveClass("bg-blue-400");
});
