import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForgotPasswordMutation } from "../../Redux/slices/UserApi";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Please enter your email");

    try {
      const res = await forgotPassword({ email }).unwrap();
      toast.success(res.message || "OTP sent to your email");

      localStorage.setItem("otpEmail", email);
      navigate("/verify-otp");
    } catch (error) {
      toast.error(error?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4">Forgot Password</h2>

        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-3" />
          <input
            type="email"
            className="w-full pl-10 py-2 border rounded"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-[#821435] text-white py-2 rounded"
        >
          {isLoading ? "Sending..." : "Send OTP"}
        </button>

        <p className="text-center mt-4">
          <Link to="/login" className="text-[#821435]">Back to Login</Link>
        </p>
      </div>
    </div>
  );
}
