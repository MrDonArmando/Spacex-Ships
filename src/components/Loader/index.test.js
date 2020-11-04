import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Loader from "./index";

it("render Loader correctly", () => {
  const { debug, getByTestId } = render(<Loader />);
  expect(getByTestId("loader")).toBeInTheDocument();
});
