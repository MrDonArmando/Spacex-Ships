import React from "react";
import { render, fireEvent, waitForElement } from "test-utils";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./index";

it("render Loader correctly", () => {
  const { getByTestId } = render(<Loader />);
  expect(getByTestId("loader")).toBeInTheDocument();
});
