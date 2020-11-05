import React from "react";
import { render, fireEvent } from "test-utils";
import "@testing-library/jest-dom/extend-expect";
import { ShipDetail } from "./index";

it("renders ShipDetails correctly", () => {
  // How to test a component which renders ONLY other components?
});

it("renders ShipDetail correctly", () => {
  const { container, getByText } = render(
    <ShipDetail detailName="year_built" value={2015} isEven={true} />
  );

  expect(getByText("2015")).toBeInTheDocument();
  expect(getByText("YEAR BUILT")).toBeInTheDocument();

  expect(container.firstChild).toHaveClass("bg-gray-400");
});

it("ShipDetail has white background if isEven is false", () => {
  const { container } = render(
    <ShipDetail detailName="year_built" value={2015} isEven={false} />
  );

  expect(container.firstChild).not.toHaveClass("bg-gray-400");
});
