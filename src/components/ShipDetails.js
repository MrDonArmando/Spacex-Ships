import React from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "./Loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

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

const ShipDetails = () => {
  const { shipID } = useParams();

  const { loading, error, data } = useQuery(SH, {
    variables: {
      shipID: shipID,
    },
  });

  if (!shipID) return null;

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const {
    name,
    image,
    year_built,
    weight_kg,
    type,
    active,
    home_port,
    roles,
  } = data.ship;

  return (
    <>
      <span className="block text-center text-2xl">{name}</span>
      <img src={image} alt="Ship" />
    </>
  );
};

export default ShipDetails;
