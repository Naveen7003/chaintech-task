import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Website</h1>
      <div className="space-x-4">
        <Link to="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link to="/registration">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}:


export default Home;
