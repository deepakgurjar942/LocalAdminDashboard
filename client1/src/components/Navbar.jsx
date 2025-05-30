// src/components/Navbar.jsx

// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FiMenu, FiX } from "react-icons/fi";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => setIsOpen(!isOpen);   

  return (
    <nav className="bg-purple-900 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between ">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">
          <Link to="/"><MdMenuOpen/></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium"></ul>

        {/* Mobile Button */}
        {/* <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button> */}
      </div>

      {/* Mobile Dropdown */}
      {/* {isOpen && (
        <ul className="md:hidden bg-blue-700 px-4 pb-4 space-y-2 text-sm">
          <li>
            <Link
              to="/"
              className="block hover:text-gray-200"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-gray-200"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block hover:text-gray-200"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block hover:text-gray-200"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      )} */}
    </nav>
  );
};

export default Navbar;
