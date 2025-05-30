import React, { useContext } from "react";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import { LayoutContext } from "./LayoutProvider";
import { Route } from "react-router-dom";

const Layout = ({ children }) => {
  // Correct way to access context values
  const { darkMode, sidebarOpen } = useContext(LayoutContext);

  return (
    // Remove the LayoutProvider wrapper - it should be at a higher level
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Navbar fixed at top */}
      <Navbar />
      
      <div className="flex flex-1 relative">
        {/* Sidebar with toggle functionality */}
        <Sidebar />
        
        {/* Main content area with proper spacing */}
        <main className={`flex-1 transition-all duration-300 bg-gray-50 dark:bg-gray-900 ${
          sidebarOpen ? 'md:ml-64' : 'ml-0'
        }`}>
          
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;