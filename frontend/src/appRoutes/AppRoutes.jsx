import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home"
import Layout from "../layout/Layout"
import About from "../pages/about/About"
import Contact from "../pages/contactus/ContactUs"
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import Courses from '../pages/courses/Courses';
import Client from '../pages/client/Client';
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/client" element={<Client />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  )
}

export default AppRoutes