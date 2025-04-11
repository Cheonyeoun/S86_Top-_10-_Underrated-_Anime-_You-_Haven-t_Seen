// src/components/nav/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-6 px-6 sticky top-0">
      <ul className="flex justify-center space-x-6 text-gray-700 font-semibold">
        <li>
          <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
