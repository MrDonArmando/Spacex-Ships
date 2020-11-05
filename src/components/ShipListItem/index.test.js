import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  screen,
} from "test-utils";
import "@testing-library/jest-dom/extend-expect";
import ShipListItem from "./index";


it("renders ShipListItem correctly", () => {
  const { container, getByText } = render(
    <ShipListItem ship={{ id: 1, name: "Some ship" }} isSelected={true} />
  );

  expect(getByText("Some ship")).toBeInTheDocument();

  expect(screen.queryByText("Other ship")).not.toBeInTheDocument();

  expect(container.firstChild).toHaveClass("bg-blue-400");
});
