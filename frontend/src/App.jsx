import React from "react";
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donor from "./pages/Donor";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";
import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer"
import SignupForm from "./pages/signup/SignupForm";
import LoginForm from "./pages/login/LoginForm";
import DonationForm from "./pages/donation/DonationForm";
import DashboardLayout from "./pages/dashboard/DashLayout";
import DashboardHome from "./components/dashbood/charityy/home/DashboardHome";
import MyDonations from "./components/dashbood/charityy/mydonation/MyDonations";
import CampaignPage from "./components/dashbood/charityy/campaigns/CampaignPage";
import WalletPage from "./components/dashbood/charityy/wallet/WalletPage";
import DonorReports from "./components/dashbood/charityy/reports/DonorReports";
import DonorSettings from "./components/dashbood/charityy/settings/DonorSettings";
import DonorProfile from "./components/dashbood/charityy/profile/DonorProfile";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";









const MainLayout = () => (
  <>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/donor", element: <Donor /> },
      { path: "/campaign", element: <Campaign /> },
      { path: "/contact", element: <Contact /> },
      { path: "/makedonation", element: <DonationForm /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <SignupForm /> },
      { path: "/verify-otp", element: <VerifyOTP /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },


    ],

  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "mydonations", element: <MyDonations /> },
      { path: "campaigns", element: <CampaignPage /> },
      { path: "wallet", element: <WalletPage /> },
      { path: "reports", element: <DonorReports /> },
      { path: "settings", element: <DonorSettings /> },
      { path: "profile", element: <DonorProfile /> },
    ],
  }

]);

export default function App() {
  return <RouterProvider router={Router} />;
}