// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import toast, { Toaster } from "react-hot-toast";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// import Navbar from "./components/common/Navbar";
// import Footer from "./components/common/Footer";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Donor from "./pages/Donor";
// import Campaign from "./pages/Campaign";
// import Contact from "./pages/Contact";
// import SignupForm from "./pages/signup/SignupForm";
// import LoginForm from "./pages/login/LoginForm";
// import DonationForm from "./pages/donation/DonationForm";
// import DashboardLayout from "./pages/dashboard/DashLayout";
// import DashboardHome from "./components/dashbood/charityy/home/DashboardHome";
// import MyDonations from "./components/dashbood/charityy/mydonation/MyDonations";
// import CampaignPage from "./components/dashbood/charityy/campaigns/CampaignPage";
// import WalletPage from "./components/dashbood/charityy/wallet/WalletPage";
// import DonorDashboard from "./pages/donorDashboard";
// import DonorSettings from "./components/dashbood/charityy/settings/DonorSettings";
// import VerifyOTP from "./pages/VerifyOTP";
// import ForgotPassword from "./pages/ForgotPassword";
// import ResetPassword from "./pages/ResetPassword";
// import UsersList from "./components/dashbood/charityy/userlist/UserList";
// import ReportsPage from "./components/dashbood/charityy/reports/ReportPage";
// import ProtectedRoute from "./pages/ProtectedRoute";
// import ProfilePage from "./pages/profilePage";

// import { setIsLoading, setUser } from "../Redux/slices/authSlice.js";
// import DonationHistory from "./pages/DonationHistory.jsx";
// import StripePaymentPage from "./pages/StripePaymentPage.jsx";
// import PaymentSuccess from "./pages/PaymentSuccess.jsx";
// import PaymentComplete from "./pages/PaymentComplete.jsx";
// const MainLayout = () => (
//   <>
//     <Toaster position="top-center" reverseOrder={false} />
//     <Navbar />
//     <Outlet />
//     <Footer />
//   </>
// );

// const BlankLayout = () => (
//   <>
//     <Toaster position="top-center" reverseOrder={false} />
//     <Outlet />
//   </>
// );

// const Router = createBrowserRouter([
//  {
//   path: "/",
//   element: <MainLayout />,
//   children: [
//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "/donor", element: <Donor /> },
//     { path: "/campaign", element: <Campaign /> },
//     { path: "/contact", element: <Contact /> },
//     { path: "/login", element: <LoginForm /> },
//     { path: "/signup", element: <SignupForm /> },
//     { path: "/verify-otp", element: <VerifyOTP /> },
//     { path: "/forgot-password", element: <ForgotPassword /> },
//     { path: "/reset-password", element: <ResetPassword /> },
//     { path: "/profile", element: <ProfilePage /> },
//       // ✅ Stripe Payment Page wrapped with <Elements>
//       {
//         path: "/stripe-payment",
//         element: <StripePaymentPage />,
//       },
//         { path: "/payment-complete", element: <PaymentComplete /> },
//         { path: "/success", element: <PaymentSuccess /> },


//     // ✅ USER Donation History
//     {
//       path: "/donation-history",
//       element: (
//         <ProtectedRoute>
//           <DonationHistory />
//         </ProtectedRoute>
//       ),
//     },
//   ],
// },
//   {
//     path: "/makedonation",
//     element: <BlankLayout />,
//     children: [{ index: true, element: <DonationForm /> }],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <ProtectedRoute adminOnly={true}>
//         <DashboardLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <DashboardHome /> },
//       { path: "mydonations", element: <MyDonations /> },
//       { path: "campaigns", element: <CampaignPage /> },
//       { path: "wallet", element: <WalletPage /> },
//       { path: "donorDashboard", element: <DonorDashboard /> },
//       { path: "reports", element: <ReportsPage /> },
//       { path: "settings", element: <DonorSettings /> },
//       { path: "users", element: <UsersList /> },
//     ],
//   },
// ]);
// export default function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const savedUser = localStorage.getItem("user");
//     if (savedUser) {
//       dispatch(setUser(JSON.parse(savedUser)));
//     }
//     else {
//       dispatch(setIsLoading(false)); // no user, stop loading
//     }
//   }, [dispatch]);

//   return <RouterProvider router={Router} />;
// }



import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Donor from "./pages/Donor";
import Campaign from "./pages/Campaign";
import Contact from "./pages/Contact";
import SignupForm from "./pages/signup/SignupForm";
import LoginForm from "./pages/login/LoginForm";
import DonationForm from "./pages/donation/DonationForm";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProfilePage from "./pages/profilePage";
import DonationHistory from "./pages/DonationHistory";
import StripePaymentPage from "./pages/StripePaymentPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentComplete from "./pages/PaymentComplete";

// Dashboard
import DashboardLayout from "./pages/dashboard/DashLayout";
import DashboardHome from "./components/dashbood/charityy/home/DashboardHome";
import MyDonations from "./components/dashbood/charityy/mydonation/MyDonations";
import CampaignPage from "./components/dashbood/charityy/campaigns/CampaignPage";
import WalletPage from "./components/dashbood/charityy/wallet/WalletPage";
import DonorDashboard from "./pages/donorDashboard";
import DonorSettings from "./components/dashbood/charityy/settings/DonorSettings";
import UsersList from "./components/dashbood/charityy/userlist/UserList";
import ReportsPage from "./components/dashbood/charityy/reports/ReportPage";

// Auth
import ProtectedRoute from "./pages/ProtectedRoute";
import { setIsLoading, setUser } from "../Redux/slices/authSlice.js";

/* ---------------- Layouts ---------------- */

const MainLayout = () => (
  <>
    <Toaster position="top-center" />
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const BlankLayout = () => (
  <>
    <Toaster position="top-center" />
    <Outlet />
  </>
);

/* ---------------- Router ---------------- */

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "donor", element: <Donor /> },
      { path: "campaign", element: <Campaign /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignupForm /> },
      { path: "verify-otp", element: <VerifyOTP /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "profile", element: <ProfilePage /> },

      { path: "stripe-payment", element: <StripePaymentPage /> },
      { path: "payment-complete", element: <PaymentComplete /> },
      { path: "success", element: <PaymentSuccess /> },

      {
        path: "donation-history",
        element: (
          <ProtectedRoute>
            <DonationHistory />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: "makedonation",
    element: <BlankLayout />,
    children: [{ index: true, element: <DonationForm /> }],
  },

  {
    path: "dashboard",
    element: (
      <ProtectedRoute adminOnly={true}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "mydonations", element: <MyDonations /> },
      { path: "campaigns", element: <CampaignPage /> },
      { path: "wallet", element: <WalletPage /> },
      { path: "donorDashboard", element: <DonorDashboard /> },
      { path: "reports", element: <ReportsPage /> },
      { path: "settings", element: <DonorSettings /> },
      { path: "users", element: <UsersList /> },
    ],
  },
]);

/* ---------------- App ---------------- */

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      dispatch(setUser(JSON.parse(savedUser)));
    } else {
      dispatch(setIsLoading(false));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}
