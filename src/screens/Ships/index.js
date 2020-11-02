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
  return (
    <div className="h-screen flex">
      <div className="overflow-auto pretty-scrollbar relative flex-1 h-screen">
        <ShipsList />
      </div>
      <div className="relative flex-3 p-4 overflow-auto pretty-scrollbar h-screen">
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
  );
};

export default Ships;
