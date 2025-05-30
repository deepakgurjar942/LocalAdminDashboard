// src/components/Layout.jsx

import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar   />
      {/* Sidebar: Fixed on the left */}

      {/* Main content area */}
      <div className="ml-64 flex-1">
       <Navbar />
        {/* <main className="p-6 bg-gray-100 min-h-screen">{children}</main> */}
      </div>
    </div>
  );
};

export default Layout;
