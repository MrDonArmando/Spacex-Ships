import produce from "immer";
import { ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP } from "./actionTypes";

const initialState = {
  additionalInformationAboutShips: {},
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

    default:
      return state;
  }
};
