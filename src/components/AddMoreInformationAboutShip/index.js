import React, { useState } from "react";
import Modal from "../Modal";
import { useDispatch, useSelector } from "react-redux";
import { addAdditionalInformationAboutShip } from "../../redux/actionCreators";

const AddMoreInformationAboutShip = ({ shipID, isModalOpened, closeModal }) => {
  const dispatch = useDispatch();
  const [moreInformationAboutShip, setMoreInformationAboutShip] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addAdditionalInformationAboutShip(shipID, moreInformationAboutShip)
    );
    closeModal();
  };

  const handleChange = (e) => setMoreInformationAboutShip(e.target.value);

  return (
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
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn-blue" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddMoreInformationAboutShip;
