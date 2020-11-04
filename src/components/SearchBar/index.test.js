import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SearchBar from "./index";

it("render SearchBar correctly", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
  expect(getByTestId("searchBar")).toBeInTheDocument();
});
