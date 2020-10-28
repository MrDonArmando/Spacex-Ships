import React from "react";
import { useQuery, gql } from "@apollo/client";

const SH = gql`
  query S($shipID: ID!) {
    ship(id: $shipID) {
      id
      name
      image
      active
      url
      year_built
      home_port
      weight_kg
      type
      roles
      missions {
        flight
        name
      }
    }
  }
`;

const ShipDetails = ({ selectedShipID }) => {
  console.log("Selected Ship ID: ", typeof selectedShipID);
  const { loading, error, data } = useQuery(SH, {
    variables: {
      shipID: selectedShipID,
    },
  });

  console.log("SHIP DETAILS: ", data);

  if (!selectedShipID) return null;

  if (loading) return <span>Loading...</span>;
  if (error) return <p>Error :(</p>;

  return <div></div>;
};

export default ShipDetails;
