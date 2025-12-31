import React from "react";
import { useNavigate } from "react-router-dom";

export default function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h2 className="text-2xl font-bold text-[#493528] mb-4">Payment Successful</h2>
        <p className="mb-6">Thank you for your donation. A receipt will be sent to your email.</p>
        <button onClick={() => navigate('/')} className="bg-[#493528] text-white px-4 py-2 rounded">Return Home</button>
      </div>
    </div>
  );
}
