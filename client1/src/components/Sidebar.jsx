import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings, FiChevronLeft } from 'react-icons/fi';
import profileimg from '../assets/profile.jfif';
import { LayoutContext } from "./layout/LayoutProvider";

const Sidebar = () => {
  const { sidebarOpen, darkMode } = useContext(LayoutContext);
  
  return (
    <aside className={`
      fixed md:relative z-30
      h-screen w-64
      transform transition-all duration-300 ease-in-out
      ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0 md:w-20'}
      ${darkMode ? 'bg-gray-800' : 'bg-black'}
      text-white
      flex flex-col
    // `}>

    {/*  Profile Section */}
      <div className="p-4 border-b border-gray-700 flex items-center space-x-3">
        <img 
          src={profileimg} 
          alt="Profile" 
          className={`rounded-full object-cover ${sidebarOpen ? 'w-12 h-12' : 'w-10 h-10 mx-auto'}`}
        />
        {sidebarOpen && (
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-gray-300">admin@gmail.com</p>
          </div>
        )}
      </div>

      {/* Collapse Button */}
      {/* <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="absolute -right-3 top-20 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
      >
        <FiChevronLeft className={`text-gray-600 dark:text-gray-200 transition-transform ${!sidebarOpen && 'rotate-180'}`} />
      </button> */}

      {/* Navigation Links */}
      <nav className="flex-1 p-2 overflow-y-auto">
        <NavItem 
          to="" 
          icon={<FiHome />} 
          label="Dashboard" 
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
        />
        <NavItem 
          to="/users" 
          icon={<FiUser />} 
          label="Users" 
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
        />
        <NavItem 
          to="/settings" 
          icon={<FiSettings />} 
          label="Settings" 
          sidebarOpen={sidebarOpen}
          darkMode={darkMode}
        />
      </nav>
    </aside>
  );
};

// Extracted NavItem component for cleaner code
const NavItem = ({ to, icon, label, sidebarOpen, darkMode }) => (
  <Link 
    to={to} 
    className={`
      flex items-center 
      p-3 rounded-lg 
      transition-colors 
      ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-800'}
      ${sidebarOpen ? 'space-x-3' : 'justify-center'}
    `}
  >
    <span className="text-lg">{icon}</span>
    {sidebarOpen && <span>{label}</span>}
  </Link>
);

export default Sidebar;