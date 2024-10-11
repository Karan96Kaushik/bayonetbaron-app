import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
          <li><Link to="/profile" className="text-blue-500 hover:text-blue-700">Profile</Link></li>
          <li><Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link></li>
          <li><Link to="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;