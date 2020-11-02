import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAdditionalInformationAboutShip } from "../redux/actionCreators";

const ShipMoreInformation = ({ shipID, image }) => {
  const dispatch = useDispatch();
  const additionalInformationAboutShip = useSelector(
    (state) => state.additionalInformationAboutShips[shipID]
  );
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [moreInformationAboutShip, setMoreInformationAboutShip] = useState("");

  const handleChange = (e) => setMoreInformationAboutShip(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAdditionalInformationAboutShip(shipID, moreInformationAboutShip)
    );
    setIsModalOpened(false);
  };

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
      <Modal isOpened={isModalOpened}>
        <div className="bg-white rounded-xl w-2/6 mb-20 border p-4">
          <form>
            <label className="mb-2 block" htmlFor="moreInformationAboutShip">
              Type addtional information about this ship
            </label>
            <textarea
              className="w-full h-40 resize-none border p-2 tracking-wide"
              id="moreInformationAboutShip"
              name="moreInformationAboutShip"
              rows="1"
              cols="40"
              placeholder="For example: This is my favourite ship..."
              value={moreInformationAboutShip}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-between mt-2">
              <button className="btn" onClick={() => setIsModalOpened(false)}>
                Cancel
              </button>
              <button className="btn-blue" onClick={handleSubmit}>
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default ShipMoreInformation;
