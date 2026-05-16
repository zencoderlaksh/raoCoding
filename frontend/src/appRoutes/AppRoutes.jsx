import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../layout/Layout"
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import About from "@/pages/about/About";
const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
