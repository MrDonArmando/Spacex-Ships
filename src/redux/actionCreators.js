import { ADD_ADDITIONAL_INFORMATION_ABOUT_SHIP } from "./actionTypes";

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
