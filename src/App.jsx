import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Authentication/Login'
import Registration from './components/Authentication/Registration'
import Home from './components/Home'
import Profile from './components/Profile.jsx/Profile'
import EditProfile from './components/Profile.jsx/EditProfile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
      </Routes>
    </div>
  )
}

export default App