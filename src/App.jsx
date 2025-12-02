import React from "react";
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









const MainLayout = () => (
  <>
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
      {path:"/",element:<Home/>},
      {path:"/about",element:<About/>},
      {path:"/donor",element:<Donor/>},
      {path:"/campaign",element:<Campaign/>},
      {path:"/contact",element:<Contact/>},      
      {path:"/signup",element:<SignupForm/>},
      {path:"/login",element:<LoginForm/>}
    ],
  
  },
]);



export default function App() {
  return <RouterProvider router={Router} />;
}