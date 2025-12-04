import React from 'react'
// import {} from "../dashboard/"
import { Outlet } from 'react-router-dom';
export const DashLayout = () => {
  return (
    <div>DashLayout</div>
  )
}


import { useState, useEffect } from "react";
import NavbarDashb from '../../components/dashbood/common/NavbarDashb';
import SideBar from '../../components/dashbood/common/SideBar';


export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // ✅ FIX: Define isRTL so it doesn't crash
  const isRTL = false;

  return (
    <div className="flex min-h-screen bg-[#F2EDE9] w-full">
      {/* Sidebar */}
      <div
        className={`fixed top-0 inset-y-0 transform lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 w-64 h-full lg:w-[20%]
          ${isRTL ? "right-0" : "left-0"} 
          ${isSidebarOpen ? "translate-x-0" : isRTL ? "translate-x-full" : "-translate-x-full"}
        `}
      >
        
        <SideBar onLinkClick={() => setIsSidebarOpen(false)} />
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div
        className={`flex-1 flex flex-col ${isRTL ? "lg:mr-[20%]" : "lg:ml-[20%]"}`}
      >
        <NavbarDashb onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="md:p-6 px-2 py-6">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
