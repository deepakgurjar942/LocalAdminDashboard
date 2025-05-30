// src/components/Sidebar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import profileimg from '../assets/profile.jfif';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-purple-900 text-white flex flex-col fixed">
      <div className="text-1xl font-bold p-4 border-b border-gray-700">
        <img src={profileimg} alt="error" className="w-15 h-14 rounded-full"  />
        <span className="block mt-2 mb-2 text-sm text-gray-300">Admin@gmail.com</span>
      </div>
      <nav className="flex-1 p-4 space-y-4">
        <Link to="/" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FiHome />
          <span>Dashboard</span>
        </Link>
        <Link to="/profile" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FiUser />
          <span>Profile</span>
        </Link>
        <Link to="/settings" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
          <FiSettings />
          <span>Settings</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
