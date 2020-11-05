import React, { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import Loader from "../Loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import MoreInformationAboutShip from "../MoreInformationAboutShip";

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

  const { id, image } = data.ship;

  return (
    <Fragment>
      <MoreInformationAboutShip shipID={id} image={image} />

      {Object.keys(data.ship).map((key, index) => {
        return (
          <ShipDetail
            key={key}
            detailName={key}
            value={
              data.ship[key] === null ? "Unknown" : data.ship[key].toString()
            }
            bgColor={index % 2 ? "gray" : "white"}
            isEven={index % 2 === 0}
          />
        );
      })}
    </Fragment>
  );
};

export default ShipDetails;

export const ShipDetail = ({ detailName, value, isEven }) => {
  return (
    <div className={`p-4 flex justify-between ${isEven && "bg-gray-400"}`}>
      <span>{replaceUnderscoreWithSpace(detailName.toUpperCase())}</span>
      <span>{value}</span>
    </div>
  );
};

const replaceUnderscoreWithSpace = (string) => string.replace("_", " ");
