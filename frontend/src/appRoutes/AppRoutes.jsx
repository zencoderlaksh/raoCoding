import React from 'react'
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import Home from "../pages/home/Home"
import Layout from "../layout/Layout"
import About from "../pages/about/About"
import Contact from "../pages/contactus/ContactUs"
import SignUp from '../pages/auth/SignUp';
import Login from '../pages/auth/Login';
import Profile from '../pages/profile/Profile';
import CourseViewer from '../pages/profile/CourseViewer';
import Client from '../pages/client/Client';
import AdminDashboard from '../pages/admin/AdminDashboard';
import BookMeeting from '@/pages/bookMeeting/BookMeeting';


import StudentCareer from '@/pages/career/StudentCareer';
import Students from '@/pages/students/Students';
import StudentProfile from '@/pages/students/StudentProfile';
import CollegeBootcamp from '@/pages/bootcamp/CollegeBootcamp';
import Placement from '@/pages/placement/Placement';




import ScrollTop from '@/components/ScrollTop';
import Community from '@/pages/join community/Community';

const AuthGuard = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const location = useLocation();

  if (!isLoaded) return null;

  if (isSignedIn) {
    if (
      location.pathname.startsWith('/signup') ||
      location.pathname.startsWith('/login') ||
      location.pathname.startsWith('/onboarding')
    ) {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

const AppRoutes = () => {
  return (
    <>
      <ScrollTop />
      <AuthGuard>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/college-bootcamp" element={<CollegeBootcamp />} />
            <Route path="/corporate-trainings" element={<Placement />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/meeting" element={<BookMeeting />} />
            <Route path="/client" element={<Client />} />

            {/* Legacy course routes redirected away from direct selling */}
            <Route path="/courses" element={<Navigate to="/corporate-trainings" replace />} />
            <Route path="/course/:courseName" element={<Navigate to="/corporate-trainings" replace />} />

            <Route path="/career" element={<StudentCareer />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:slug" element={<StudentProfile />} />
          </Route>

          <Route path="/login/*" element={<Login />} />
          <Route path="/signup/*" element={<SignUp />} />
          <Route path="/onboarding/*" element={<Navigate to="/" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/my-courses/:id" element={<CourseViewer />} />
        </Routes>
      </AuthGuard>
    </>
  );
};

export default AppRoutes;
