import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function PaymentComplete() {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState('Checking payment status...');

  useEffect(() => {
    const params = new URLSearchParams(search);
    const payment_intent = params.get('payment_intent');
    const payment_status = params.get('redirect_status');

    if (payment_status === 'succeeded' || payment_status === 'succeeded') {
      setMessage('Payment completed successfully. Redirecting...');
      setTimeout(() => navigate('/success'), 2000);
    } else {
      setMessage('Payment not completed. You can try again.');
    }
  }, [search, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
        <h2 className="text-xl font-bold text-[#493528] mb-4">Payment Status</h2>
        <p>{message}</p>
        <div className="mt-4">
          <button onClick={() => navigate('/')} className="bg-[#493528] text-white px-4 py-2 rounded mr-2">Home</button>
          <button onClick={() => navigate(-1)} className="px-4 py-2 border rounded">Go Back</button>
        </div>
      </div>
    </div>
  );
}
