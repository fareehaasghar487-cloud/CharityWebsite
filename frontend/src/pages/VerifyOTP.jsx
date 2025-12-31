// import React, { useState } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useVerifyOTPMutation } from "../../Redux/slices/UserApi";

// export default function OtpVerify() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const email = location.state?.email || localStorage.getItem("otpEmail");

//   const [otp, setOtp] = useState("");
//   const [verifyOtp, { isLoading }] = useVerifyOTPMutation();

//   const handleVerify = async () => {
//     if (!otp) {
//       toast.error("Enter OTP");
//       return;
//     }
//     if (!email) {
//       toast.error("Email not found. Please try again.");
//       return;
//     }

//     try {
//       await verifyOtp({ email, otp }).unwrap();

//       toast.success("OTP verified successfully!");
      
//       // Save OTP for ResetPassword page
//       localStorage.setItem("otpValue", otp);

//       navigate("/reset-password");
//     } catch (error) {
//       toast.error(error?.data?.message || "Invalid OTP");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center">
//         <h2 className="text-2xl font-bold mb-3">Verify OTP</h2>
//         <p className="text-gray-600 mb-4">OTP sent to <b>{email}</b></p>
//         <input
//           type="text"
//           value={otp}
//           onChange={(e) => setOtp(e.target.value)}
//           placeholder="Enter OTP"
//           className="w-full border px-4 py-2 rounded mb-4"
//         />
//         <button
//           onClick={handleVerify}
//           disabled={isLoading}
//           className="w-full py-2 rounded font-bold text-white"
//           style={{ background: "#821435" }}
//         >
//           {isLoading ? "Verifying..." : "Verify OTP"}
//         </button>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useVerifyOTPMutation } from "../../Redux/slices/UserApi";

export default function VerifyOTP() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOTP, { isLoading }] = useVerifyOTPMutation();

  const email = localStorage.getItem("otpEmail");

  useEffect(() => {
    if (!email) {
      toast.error("Email missing");
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  const handleVerify = async () => {
    if (!otp) return toast.error("Enter OTP");

    try {
      await verifyOTP({ email, otp: Number(otp) }).unwrap();

      // 🔥 SAVE OTP FOR RESET PASSWORD
      localStorage.setItem("otpValue", otp);

      toast.success("OTP verified");
      navigate("/login");
    } catch (error) {
      toast.error(error?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <h2 className="text-xl font-bold text-center mb-4">Verify OTP</h2>

        <input
          type="number"
          className="w-full border px-4 py-2 rounded mb-4"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <button
          onClick={handleVerify}
          disabled={isLoading}
          className="w-full bg-[#821435] text-white py-2 rounded"
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}
