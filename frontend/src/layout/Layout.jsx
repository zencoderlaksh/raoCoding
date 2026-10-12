import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      {/* Floating WhatsApp Quick Action with RAO Logo */}
      <WhatsAppButton />
    </div>
  );
}