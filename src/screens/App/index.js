import React from "react";

const App = () => {
  return (
    <div className="bg-teal-700 h-screen flex flex-col">
      <div className="bg-green-400  w-full flex-initial">
        <h1 className="text-6xl">Hello there</h1>
      </div>
      <div className="bg-red-300 w-full flex-1 flex">
        <div className="bg-yellow-800 flex-1"></div>
        <div className="bg-pink-800 flex-1"></div>
      </div>
    </div>
  );
};

export default App;
