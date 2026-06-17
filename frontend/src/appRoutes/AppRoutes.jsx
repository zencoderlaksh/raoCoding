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
import CoursePage from '../pages/courseDetails/CoursePages';
import BookMeeting from '@/pages/bookMeeting/BookMeeting';

import Career from '@/pages/Career/StudentCareer';
import Students from '@/students/Students';
import StudentProfile from '@/students/StudentProfile';
import ScrollTop from '@/components/ScrollTop';

const AppRoutes = () => {
  return (
    <>
      <ScrollTop />
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meeting" element={<BookMeeting />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/client" element={<Client />} />
        <Route path="/course/:courseName" element={<CoursePage />} />

         <Route path="/career" element={<Career />} />

        <Route path="/students" element={<Students />} />

        <Route
          path="/students/:slug"
          element={<StudentProfile />}
        />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
    </>
  )
}

export default AppRoutes
