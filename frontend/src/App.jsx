import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Donor from "./pages/Donor";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import DonorDashboard from "./pages/donorDashboard";

// Layout Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Layout with Navbar + Footer
const MainLayout = () => (
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/donor", element: <Donor /> },
      { path: "/campaign", element: <Campaign /> },
      { path: "/contact", element: <Contact /> },
      { path: "/verify-otp", element: <VerifyOTP /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },

      // Dashboard
      { path: "/donor-dashboard", element: <DonorDashboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
