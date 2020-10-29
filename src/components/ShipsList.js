import React from "react";
import ShipListItem from "./ShipListItem";
import Loader from "./Loader";
import { gql, useQuery } from "@apollo/client";

const SHIPS_QUERY = gql`
  query {
    ships {
      id
      name
    }
  }
`;

const ShipsList = ({ selectedShipID, setSelectedShipID }) => {
  const { loading, error, data } = useQuery(SHIPS_QUERY);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const { ships } = data;
  console.log("data: ", ships);

  return (
    <ul>
      {ships.map((ship) => (
        <ShipListItem
          key={ship.id}
          ship={ship}
          setSelectedShipID={setSelectedShipID}
          isSelected={ship.id === selectedShipID}
        />
      ))}
    </ul>
  );
};

export default ShipsList;
