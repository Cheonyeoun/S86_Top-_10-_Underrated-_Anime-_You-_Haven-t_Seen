// src/components/nav/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate();
  return (
<nav className="bg-white shadow-md py-6 px-6 sticky top-0 flex items-center justify-between">
  <Link to="/" className="hover:text-blue-500 font-semibold text-xl transition duration-200">
    Underated 🐉
  </Link>
  <ul className="flex space-x-6 text-gray-700 font-semibold">       
    <li><button onClick={() => navigate(-1)}>🔙</button></li>
    <li><Link to="/home" className="hover:text-blue-500 transition duration-300">Home</Link></li>
    <li><Link to="/contact" className="hover:text-blue-500 transition duration-300">Contact</Link></li>
  </ul>
</nav>

  );
};

export default Navbar;
