// src/components/NotFound.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
        <FaExclamationTriangle className="text-yellow-500 w-16 h-16 mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl text-gray-700 mb-4">Oops! Page not found.</p>
        <p className="text-gray-600 mb-8">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Link to='/' className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
