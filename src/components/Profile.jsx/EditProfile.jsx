import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EditProfile = () => {
    const navigate = useNavigate()
    const currentUser = JSON.parse(localStorage.getItem('loggedInUser'))
    const [firstName, setFirstName] = useState(currentUser.firstName);
    const [lastName, setLastName] = useState(currentUser.lastName);
    const [email, setEmail] = useState(currentUser.email);
    const [gender, setGender] = useState(currentUser.gender);

    const handleSubmit = (e) =>{
        e.preventDefault()

        const updatedUser = {...currentUser, firstName, lastName, gender, email}

        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        navigate('/profile')
    }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input 
            type="text" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input 
            type="text" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Gender</label>
          <select 
            value={gender} 
            onChange={(e) => setGender(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          >
            <option value="" disabled>Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProfile