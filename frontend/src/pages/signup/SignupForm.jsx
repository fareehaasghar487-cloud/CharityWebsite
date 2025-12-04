import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSignupMutation } from "../../../Redux/slices/UserApi";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { signup } = useSignupMutation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(formData).unwrap();
      console.log(response);
      toast.success("Signup Successfully");
      navigate("/login");
    } catch (error) {
      console.error(error.response?.data || error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32"
      style={{ backgroundColor: "#F7EFEA" }}
    >
      <div
        className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border"
        style={{ borderColor: "#543D2E40" }}
      >
        {/* Header */}
        <div className="py-6 px-4 sm:px-8 text-center" style={{ backgroundColor: "#82143520" }}>
          <h1
            className="font-serif text-2xl sm:text-3xl font-bold"
            data-aos="zoom-out-up"
            style={{ color: "#543D2E" }}
          >
            Create Hope Today
          </h1>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {/* Full Name */}
          <div className="mb-4">
            <label
              className="block font-semibold mb-2"
              data-aos="zoom-in-up"
              style={{ color: "#543D2E" }}
            >
              Full Name
            </label>
            <div className="relative">
              <FaUser
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={18}
                style={{ color: "#821435" }}
              />
              <input
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              className="block font-semibold mb-2"
              data-aos="zoom-in-up"
              style={{ color: "#543D2E" }}
            >
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={18}
                style={{ color: "#821435" }}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              className="block font-semibold mb-2"
              data-aos="zoom-in-up"
              style={{ color: "#543D2E" }}
            >
              Password
            </label>
            <div className="relative">
              <FaLock
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={18}
                style={{ color: "#821435" }}
              />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                style={{ color: "#821435" }}
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label
              className="block font-semibold mb-2"
              data-aos="zoom-in-up"
              style={{ color: "#543D2E" }}
            >
              Confirm Password
            </label>
            <div className="relative">
              <FaLock
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                size={18}
                style={{ color: "#821435" }}
              />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                style={{ color: "#821435" }}
              >
                {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {/* Signup Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{
              backgroundColor: "#821435",
              color: "white",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#543D2E")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#821435")}
          >
            Sign Up
          </button>

          {/* Login Link */}
          <div className="mt-6 text-center font-medium">
            <span style={{ color: "#543D2E" }}>Already have an account? </span>
            <Link
              to="/login"
              className="hover:underline"
              style={{ color: "#821435" }}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
