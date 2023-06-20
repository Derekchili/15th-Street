import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white font-bold text-xl">
          91st Paper
        </Link>
        <div>
          {/* Add any navigation links here */}
          <Link
            to="/"
            className="text-gray-300 hover:text-white px-2 py-1 rounded"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
