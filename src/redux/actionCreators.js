import { ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP, SET_SEARCH_PHRASE } from "./actionTypes";

export const addAdditionalInformationAboutShip = (
  shipID,
  additionalInformationAboutShip
) => ({
  type: ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP,
  payload: {
    shipID,
    additionalInformationAboutShip,
  },
});

export const setSearchPhrase = (searchPhrase) => ({
    type: SET_SEARCH_PHRASE,
    payload: {
        searchPhrase
    }
})