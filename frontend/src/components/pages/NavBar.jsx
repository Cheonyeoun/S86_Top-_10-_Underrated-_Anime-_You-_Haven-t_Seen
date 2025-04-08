import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ label, onClick }) => {
  return (
<>

<nav className='text-gray-700 font-semibold'>

<ul className='flex space-x-4 py-3'>
  <li>  <Link to="/"></Link></li>
    <li><Link to = "/">Home</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>


  </ul>
</nav>



</>
  );
};

export default Navbar;
