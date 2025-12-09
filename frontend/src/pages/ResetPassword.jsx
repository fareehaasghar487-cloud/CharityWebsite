import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { useResetPasswordMutation } from "../../Redux/slices/UserApi";

export default function ResetPassword() {
    const navigate = useNavigate();
    const location = useLocation();

    // Email coming from Verify OTP page
    const email = location.state?.email;

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleReset = async () => {
        if (!newPassword || !confirmPassword) {
            toast.error("Fill all fields");
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const res = await resetPassword({
                email,
                newPassword,
            }).unwrap();

            toast.success("Password Reset Successfully!");

            navigate("/login");

        } catch (error) {
            toast.error(error?.data?.message || "Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>

                <p className="text-gray-600 text-center mb-6">
                    Reset password for <b>{email}</b>
                </p>

                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full border px-4 py-2 rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border px-4 py-2 rounded mb-4"
                />

                <button
                    onClick={handleReset}
                    disabled={isLoading}
                    className="w-full py-2 rounded font-bold text-white disabled:opacity-50"
                    style={{ background: "#821435" }}
                >
                    {isLoading ? "Updating..." : "Reset Password"}
                </button>
            </div>
        </div>
    );
}
