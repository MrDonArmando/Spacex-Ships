import React from "react";
import ShipListItem from "./ShipListItem";
import Loader from "./Loader";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const SHIPS_QUERY = gql`
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
  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const { ships } = data;

  return (
    <ul>
      {ships.map((ship) => {
        // console.log(ship.id);
        // console.log("!!!! shipID: ", shipID);
        return (
          <ShipListItem
            key={ship.id}
            ship={ship}
            isSelected={shipID === ship.id}
          />
        );
      })}
    </ul>
  );
};

export default ShipsList;
