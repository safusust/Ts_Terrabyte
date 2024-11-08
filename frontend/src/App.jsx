import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/authContext";

const App = () => {
  return (
    <div className="w-screen min-h-screen relative">
      <AuthProvider>
        <Navbar />
        <Outlet />
      </AuthProvider>
    </div>
  );
};

export default App;
