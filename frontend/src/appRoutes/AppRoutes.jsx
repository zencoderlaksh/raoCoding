import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "../pages/home/Home"
import Layout from "../layout/Layout"
import About from "../pages/about/About"
import Contact from "../pages/contactus/ContactUs"
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import Onboarding from '../pages/auth/Onboarding';
import Profile from '../pages/profile/Profile';
import CourseViewer from '../pages/profile/CourseViewer';
import Courses from '../pages/courses/Courses';
import Client from '../pages/client/Client';
import CoursePage from '../pages/courseDetails/CoursePages';
import AdminDashboard from '../pages/admin/AdminDashboard';
import BookMeeting from '@/pages/bookMeeting/BookMeeting';


import StudentCareer from '@/pages/career/StudentCareer';

import Students from '@/pages/students/Students';
import StudentProfile from '@/pages/students/StudentProfile';




import ScrollTop from '@/components/ScrollTop';
import Community from '@/pages/join community/Community';

const OnboardingGuard = ({ children }) => {
  const { user, isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  if (isSignedIn) {
    const hasOnboarded = user?.publicMetadata?.onboardingComplete === true;
    
    if (!hasOnboarded && !location.pathname.startsWith('/onboarding')) {
      return <Navigate to="/onboarding" replace />;
    }
    
    if (hasOnboarded && (location.pathname.startsWith('/onboarding') || location.pathname.startsWith('/signup') || location.pathname.startsWith('/login'))) {
      return <Navigate to="/" replace />;
    }
  } else if (location.pathname.startsWith('/onboarding')) {
    return <Navigate to="/signup" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollTop />
      <OnboardingGuard>
        <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/meeting" element={<BookMeeting />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/client" element={<Client />} />
        <Route path="/course/:courseName" element={<CoursePage />} />

         <Route path="/career" element={<StudentCareer />} />

        <Route path="/students" element={<Students />} />

        <Route
          path="/students/:slug"
          element={<StudentProfile />}
        />
      </Route>
      <Route path='/login/*' element={<Login />} />
      <Route path='/signup/*' element={<SignUp />} />
      <Route path='/onboarding/*' element={<Onboarding />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/admin' element={<AdminDashboard />} />
      <Route path='/community' element={<Community />} />
      <Route path='/my-courses/:id' element={<CourseViewer />} />
        </Routes>
      </OnboardingGuard>
    </>
  )
}

export default AppRoutes
