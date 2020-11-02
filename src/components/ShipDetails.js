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

  const { name, image, url } = data.ship;

  return (
    <>
      <div className="flex h-auto mb-4">
        <div className="flex-2 flex justify-center items-center">
          <a href={url} target="_blank" className="block text-center text-2xl">
            {url ? `More details about ${name}` : "URL is unavaiable"}
          </a>
        </div>
        <div className="flex-3">
          <img src={image} alt="Ship" />
        </div>
      </div>

      {Object.keys(data.ship).map((key, index) => {
        return (
          <ShipDetail
            title={key}
            value={
              data.ship[key] === null ? "Unknown" : data.ship[key].toString()
            }
            bgColor={index % 2 ? "gray" : "white"}
            isEven={index % 2 === 0}
          />
        );
      })}
    </>
  );
};

export default ShipDetails;

const ShipDetail = ({ title, value, isEven }) => (
  <div className={`p-4 flex justify-between ${isEven && "bg-gray-400"}`}>
    <span>{replaceUnderscoreWithSpace(title.toUpperCase())}</span>
    <span>{value}</span>
  </div>
);

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const replaceUnderscoreWithSpace = (string) => string.replace("_", " ");
