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
import SearchBar from "../../components/SearchBar";

const Ships = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="height-80px border-solid border-b border-gray flex items-center">
        <SearchBar />
      </div>
      <div className="height--80px flex">
        <div className="overflow-auto pretty-scrollbar relative flex-1 h-full">
          <ShipsList />
        </div>
        <div className="relative flex-3 p-4 overflow-auto pretty-scrollbar h-full">
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
