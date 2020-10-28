import React from "react";
import ShipsList from "../../components/ShipsList";

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      {/* <div className="bg-green-400  w-full h-32 flex-initial">
        <span>sdafasdf</span>
      </div> */}
      <div className="w-full flex-1 flex">
        <div className="overflow-auto flex-1 h-screen">
          <ShipsList />
        </div>
        <div className="bg-pink-800 flex-1"></div>
      </div>
    </div>
  );
};

export default App;
