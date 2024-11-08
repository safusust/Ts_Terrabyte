import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-screen h-screen text-rose-500">
      <Outlet />
    </div>
  );
};

export default App;
