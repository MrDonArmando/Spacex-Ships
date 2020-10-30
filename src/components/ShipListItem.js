import React, { memo } from "react";
import { useRouteMatch, Link, useParams } from "react-router-dom";

// Wihtout memo even if props does not change component is re-rendered.
const ShipListItem = memo(({ ship: { id, name }, isSelected }) => {
  //console.log(isSelected);

  // let { path, url } = useRouteMatch();
  // console.log("path: ", path);
  // console.log("url: ", url);

  return (
    <li
      className={`w-full h-auto cursor-pointer border-b border-solid border-blue-600 bg-blue-300 ${
        isSelected && "bg-blue-800"
      }`}
    >
      <Link to={`/ships/${id}`} className="block w-full h-full text-center p-4">
        <span className="text-2xl text-shadow">{name}</span>
      </Link>
    </li>
  );
});

export default ShipListItem;
