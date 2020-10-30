import React, { useState } from "react";
import ShipDetails from "../../components/ShipDetails";
import ShipsList from "../../components/ShipsList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

const Ships = () => {
  // let { path, url } = useRouteMatch();
  // console.log("path: ", path);
  // console.log("url: ", url);

  return (
    <div className="h-screen flex flex-col">
      {/* <div className="bg-green-400  w-full h-32 flex-initial">
        <span>sdafasdf</span>
      </div> */}

      <div className="w-full flex-1 flex">
        <div className="overflow-auto pretty-scrollbar relative flex-1 h-screen">
          <ShipsList />
        </div>
        <div className="relative flex-3">
          <Route exact path="/ships">
            <h3 className="text-center mt-64 text-2xl tracking-wide">
              Please select a ship
            </h3>
          </Route>
          <Route path={`/ships/:shipID`}>
            <ShipDetails />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Ships;
