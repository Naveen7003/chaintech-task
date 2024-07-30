import React from 'react';
import { Link } from 'react-router-dom';
import error from '/404.gif';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <img className="w-1/2 max-w-md mb-6" src={error} alt="404 Error" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-6">We couldn't find the page you're looking for. It might have been moved or deleted.</p>
      <Link 
        to="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Go to Homepage
      </Link>
      <Link 
        to="/login"
        className="mt-4 px-6 py-3 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition-colors"
      >
        Login
      </Link>
    </div>
  );
};

export default Error;
