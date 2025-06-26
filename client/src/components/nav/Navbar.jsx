// src/components/nav/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
<nav className="bg-white shadow-md py-4 px-6 sticky top-0 text-xl">
  <div className="flex items-center space-x-8 justify-between">
          <Link to="/" className="hover:text-blue-500 font-semibold text-2xl transition duration-200">
                  Underated 🐉
          </Link>
    <ul className="flex space-x-6 text-gray-700 font-semibold">       
      <li><button onClick={() => window.history.back()}>🔙</button></li>
      <li><Link to="/home" className="hover:text-blue-500 transition duration-300">Home</Link></li>
      <li><Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link></li>
    </ul>
  </div>
</nav>

  );
};

export default Navbar;
