import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  queryByText,
  screen,
} from "test-utils";
import AddMoreInformationAboutShip from "./index";

// screen.debug();

it("renders AddMoreInformationAboutShip correctly", () => {
  const { getByLabelText, getByTestId, container } = render(
    <AddMoreInformationAboutShip shipID={1} isModalOpened={true} />
  );

  const textarea = getByLabelText("moreInformationAboutShip");

  expect(textarea.value).toBe("");
  
  fireEvent.change(textarea, { target: { value: "This ship is rusty" } });
  expect(textarea.value).toBe("This ship is rusty");
});
