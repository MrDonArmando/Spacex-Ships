import * as actions from "./actionCreators";
import * as types from "./actionTypes";
import reducer from "./reducer";

describe("actions", () => {
  it("should create an action to addAdditionalInformationAboutShip", () => {
    const additionalInformationAboutShip =
      "This ship is the biggest ship from all";

    const expectedAction = {
      type: types.ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP,
      payload: {
        shipID: 1,
        additionalInformationAboutShip,
      },
    };

    expect(
      actions.addAdditionalInformationAboutShip(
        1,
        additionalInformationAboutShip
      )
    ).toEqual(expectedAction);
  });

  it("should create an action to setSearchPhrase", () => {
    const searchPhrase = "Some search phrase";

    const expectedAction = {
      type: types.SET_SEARCH_PHRASE,
      payload: {
        searchPhrase,
      },
    };

    expect(actions.setSearchPhrase(searchPhrase)).toEqual(expectedAction);
  });
});

describe("reducer", () => {
  const initialState = {
    additionalInformationAboutShips: {},
    searchPhrase: "",
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP", () => {
    const additionalInformationAboutShip = "This ship is really old";

    expect(
      reducer(initialState, {
        type: types.ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP,
        payload: {
          shipID: 1,
          additionalInformationAboutShip,
        },
      })
    ).toEqual({
      additionalInformationAboutShips: {
        1: additionalInformationAboutShip,
      },
      searchPhrase: "",
    });
  });

  it("should handle SET_SEARCH_PHRASE", () => {
    const searchPhrase = "Something to search";

    expect(
      reducer(initialState, {
        type: types.SET_SEARCH_PHRASE,
        payload: {
          searchPhrase,
        },
      })
    ).toEqual({
      additionalInformationAboutShips: {},
      searchPhrase,
    });
  });
});
