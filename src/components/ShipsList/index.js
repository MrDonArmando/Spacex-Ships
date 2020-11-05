import React from "react";
import ShipListItem from "../ShipListItem";
import Loader from "../Loader";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const SHIPS_QUERY = gql`
  query {
    ships {
      id
      name
    }
  }
`;

const ShipsList = () => {
  const { loading, error, data } = useQuery(SHIPS_QUERY);
  const { shipID } = useParams();

  const searchPhrase = useSelector((state) => state.searchPhrase);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const { ships } = data;
  console.log(
    "ships: ",
    ships.map((ship) => ship.name)
  );

  const displayShips = () => {
    return ships.map((ship) => {
      if (ship.name.toLowerCase().includes(searchPhrase.toLowerCase()))
        return (
          <ShipListItem
            key={ship.id}
            ship={ship}
            isSelected={shipID === ship.id}
            data-testid="shipListItem"
          />
        );
    });
  };

  return <ul>{displayShips()}</ul>;
};

export default ShipsList;
