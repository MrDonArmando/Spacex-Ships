import React from "react";
import { render, fireEvent } from "test-utils";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SearchBar from "./index";

it("renders SearchBar correctly", () => {
  const { getByTestId } = render(<SearchBar />);
  expect(getByTestId("searchBar")).toBeInTheDocument();
});
