import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Authentication/Login'
import Registration from './components/Authentication/Registration'
import Home from './components/Home'
import Profile from './components/Profile.jsx/Profile'
import EditProfile from './components/Profile.jsx/EditProfile'
import Error from './components/Error'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App