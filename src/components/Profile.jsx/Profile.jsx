import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));

  if (!user) {
    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">No user logged in</div>;
  }

  const { firstName, lastName, email, gender } = user;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center underline">Profile</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">First Name:</label>
          <p className="w-full px-4 py-2 border rounded-md bg-gray-50 break-words">{firstName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Last Name:</label>
          <p className="w-full px-4 py-2 border rounded-md bg-gray-50 break-words">{lastName}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Email:</label>
          <p className="w-full px-4 py-2 border rounded-md bg-gray-50 break-words">{email}</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">Gender:</label>
          <p className="w-full px-4 py-2 border rounded-md bg-gray-50 break-words">{gender}</p>
        </div>

        <div className="text-center">
          <Link to="/editprofile" className="px-4 py-2 mt-3 bg-green-500 text-white rounded hover:bg-green-600">
            Edit Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
