import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { LayoutContext } from "./LayoutProvider";

const Layout = () => {
  const { darkMode, sidebarOpen } = useContext(LayoutContext);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Navbar />
      
      <div className="flex flex-1 relative">
        <Sidebar />
        
        <main className={`flex-1 transition-all duration-300 bg-gray-50 dark:bg-gray-900  ${
          sidebarOpen ? 'md:ml-6' : 'ml-0'
        }`}>
          {/* Replace children with Outlet */}
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;