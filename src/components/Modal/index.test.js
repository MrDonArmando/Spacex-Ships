import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  screen,
  userEvent,
  waitFor,
  cleanup
} from "test-utils";
import Modal from "./index";

afterEach(cleanup)

it("shows children if modal is opened", () => {
  const { getByText } = render(
    <Modal isOpened={true}>
      <div>test</div>
    </Modal>
  );

  expect(getByText("test")).toBeInTheDocument();
});

it("does not show children if modal is closed", () => {
  const { queryByText } = render(
    <Modal isOpened={false}>
      <div>test</div>
    </Modal>
  );

  expect(queryByText("test")).not.toBeInTheDocument();
});
