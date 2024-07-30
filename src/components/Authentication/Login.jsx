import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
        const users = JSON.parse(localStorage.getItem('users'));
        if (users) {
          const currentUser = users.find(u => u.email === email && u.password === password);
          if (currentUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
            navigate('/profile');
          } else {
            alert('Invalid email or password');
          }
        } else {
          alert('No users found');
        }
      } catch (error) {
        alert('User not Found');
      }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
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

        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
        <h1 className="text-[2.5vh] text-center mt-3">Not a Member <Link className="text-blue-400" to="/registration">SignUp</Link></h1>
      </form>
    </div>
  );
};

export default Login;
