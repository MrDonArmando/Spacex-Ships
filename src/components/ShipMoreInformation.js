import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAdditionalInformationAboutShip } from "../redux/actionCreators";
import AddMoreInformationAboutShip from "./AddMoreInformationAboutShip";


const ShipMoreInformation = ({ shipID, image }) => {
  const additionalInformationAboutShip = useSelector(
    (state) => state.additionalInformationAboutShips[shipID]
  );
  const [isModalOpened, setIsModalOpened] = useState(false);

  const closeModal = () => setIsModalOpened(false);

  const props = {
      shipID,
      isModalOpened,
      closeModal
  }

  return (
    <>
      <div className="flex h-auto mb-4">
        <div className="flex-2 relative flex flex-col">
          <div className="flex-1 tracking-wide">
            {additionalInformationAboutShip
              ? additionalInformationAboutShip
              : "No additional information given"}
          </div>

          <div className="h-12">
            <button
              className="p-2 bg-blue-400 rounded text-white tracking-wide absolute left-0 bottom-0"
              onClick={() => setIsModalOpened(true)}
            >
              Add more information
            </button>
          </div>
        </div>
        <div className="flex-3">
          <img src={image} alt="Ship" />
        </div>
      </div>
      <AddMoreInformationAboutShip {...props}/>
    </>
  );
};

export default ShipMoreInformation;
