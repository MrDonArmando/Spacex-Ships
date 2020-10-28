import React from "react";
import ShipListItem from "./ShipListItem";
import { gql, useQuery } from "@apollo/client";

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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { ships } = data;
  console.log("data: ", ships);

  return (
    <ul>
      {ships.map((ship) => (
        <ShipListItem key={ship.id} ship={ship} />
      ))}
    </ul>
  );
};

export default ShipsList;
