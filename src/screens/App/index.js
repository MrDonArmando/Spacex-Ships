import React, { useState } from "react";
import ShipDetails from "../../components/ShipDetails";
import ShipsList from "../../components/ShipsList";

const App = () => {
  const [selectedShipID, setSelectedShipID] = useState("GOMSTREE");

  return (
    <div className="h-screen flex flex-col">
      {/* <div className="bg-green-400  w-full h-32 flex-initial">
        <span>sdafasdf</span>
      </div> */}
      <div className="w-full flex-1 flex">
        <div className="overflow-auto pretty-scrollbar relative flex-1 h-screen">
          <ShipsList
            selectedShipID={selectedShipID}
            setSelectedShipID={setSelectedShipID}
          />
        </div>
        <div className="flex-1 relative">
          <ShipDetails selectedShipID={selectedShipID} />
        </div>
      </div>
    </div>
  );
};

export default App;
