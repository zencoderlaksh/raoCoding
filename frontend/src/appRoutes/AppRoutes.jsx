import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"

import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes