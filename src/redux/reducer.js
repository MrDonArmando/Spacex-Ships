import produce from "immer";
import {
  ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP,
  SET_SEARCH_PHRASE,
} from "./actionTypes";

const initialState = {
  additionalInformationAboutShips: {},
  searchPhrase: "",
};

// additionalInformationAboutShips: {
//     [shipID]: "Additional information..."
// }

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP: {
      const { shipID, additionalInformationAboutShip } = action.payload;
      const nextState = produce(state, (draft) => {
        draft.additionalInformationAboutShips[
          shipID
        ] = additionalInformationAboutShip;
      });
      return nextState;
    }

    case SET_SEARCH_PHRASE: {
      const { searchPhrase } = action.payload;
      const nextState = produce(state, (draft) => {
        draft.searchPhrase = searchPhrase;
      });
      return nextState;
    }

    default:
      return state;
  }
};
