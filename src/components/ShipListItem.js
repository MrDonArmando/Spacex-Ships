import React from "react";

const ShipListItem = ({
  ship: { id, name },
  setSelectedShipID,
  isSelected,
}) => {
  const handleClick = () => setSelectedShipID(id);

  return (
    <li
      className="w-full h-auto p-4 cursor-pointer bg-blue-200 border-b border-solid border-blue-600"
      onClick={handleClick}
    >
      <span className="text-2xl">{name}</span>
    </li>
  );
};

export default ShipListItem;
