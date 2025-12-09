import React, { useState, useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import { useForgotPasswordMutation } from "../../Redux/slices/UserApi";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email");
            return;
        }

        try {
            const res = await forgotPassword({ email }).unwrap();
            toast.success(res.message || "OTP sent to your email!");

            // Pass email to OTP page via state
            navigate("/verify-otp", { state: { email } });
        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-32" style={{ backgroundColor: "#F7EFEA" }}>
            <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border" style={{ borderColor: "#543D2E40" }}>
                <div className="py-6 px-4 sm:px-8 text-center" style={{ backgroundColor: "#82143520" }}>
                    <h1 className="font-serif text-2xl sm:text-3xl font-bold" data-aos="zoom-out-up" style={{ color: "#543D2E" }}>
                        Forgot Password
                    </h1>
                    <p className="mt-2 text-sm" style={{ color: "#543D2E" }}>
                        Enter your email and we’ll send you a reset OTP.
                    </p>
                </div>

                <div className="p-6 sm:p-8">
                    <div className="mb-6">
                        <label className="block font-semibold mb-2" data-aos="zoom-in-up" style={{ color: "#543D2E" }}>
                            Email Address
                        </label>
                        <div className="relative">
                            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your registered email"
                                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-1 outline-none transition-all duration-200"
                                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="w-full font-bold py-2 px-4 rounded shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ backgroundColor: "#821435", color: "white" }}
                    >
                        {isLoading ? "Sending..." : "Send OTP"}
                    </button>

                    <div className="mt-6 text-center font-medium">
                        <span style={{ color: "#543D2E" }}>Remember your password? </span>
                        <Link to="/login" className="hover:underline" style={{ color: "#821435" }}>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
