import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripeCheckoutForm({ donationData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(null);

    try {
      // Confirm Stripe payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-complete`,
        },
        redirect: "if_required",
      });

      if (error) {
        setMessage(error.message);
        setIsLoading(false);
        return;
      }

      if (paymentIntent && paymentIntent.status === "succeeded") {
        setMessage("Payment successful! Saving donation...");

        // ✅ Save donation using confirmPayment endpoint (doesn't require auth)
        // This uses Stripe metadata to record the donation
        const API_URL = "https://charitywebsite.onrender.com/api";
        await fetch(`${API_URL}/confirm-payment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
          }),
        });

        setMessage("Donation recorded successfully!");
        setTimeout(() => navigate("/success"), 2000);
      } else if (paymentIntent.status === "processing") {
        setMessage("Your payment is processing.");
      } else if (paymentIntent.status === "requires_payment_method") {
        setMessage("Payment failed. Try a different payment method.");
      } else {
        setMessage("Something went wrong.");
      }
    } catch (err) {
      console.error("Payment confirmation error:", err);
      setMessage("An error occurred during payment processing.");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4 text-[#493528]">Complete Your Donation</h2>

        <div className="mb-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm mb-2"><span className="font-semibold">Donation For:</span> {donationData.subject}</p>
          <p className="text-sm mb-2"><span className="font-semibold">Amount:</span> PKR{donationData.price}</p>
          <p className="text-sm"><span className="font-semibold">Donor:</span> {donationData.fullName}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border rounded-md p-3">
            <PaymentElement options={{ layout: "tabs" }} />
          </div>

          {message && (
            <div
              className={`p-3 rounded text-sm ${
                message.includes("success") ? "bg-green-100 text-green-700" :
                message.includes("Error") ? "bg-red-100 text-red-700" :
                "bg-yellow-100 text-yellow-700"
              }`}
            >
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={!stripe || isLoading}
            className="w-full bg-[#493528] text-white py-3 rounded-lg hover:bg-[#3a2a1f] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isLoading ? "Processing..." : `Pay PKR${donationData.price}`}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function StripePaymentPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const donationData = state?.donationData;
  const [clientSecret, setClientSecret] = useState("");
  const createdRef = useRef(false);

  if (!donationData) {
    navigate("/");
    return null;
  }

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        // Use the same base URL as DonationApi.js to avoid CORS/routing issues
        const API_URL = "https://charitywebsite.onrender.com/api";
        const response = await fetch(`${API_URL}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: donationData.price * 100,
            currency: "pkr",
            metadata: {
              subject: donationData.subject,
              email: donationData.email,
              fullName: donationData.fullName,
            },
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);
      } catch (err) {
        console.error("Error creating payment intent:", err);
      }
    };

    if (!createdRef.current) {
      createdRef.current = true;
      createPaymentIntent();
    }
  }, [donationData]);

  if (!clientSecret) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/60">
        <div className="bg-white p-8 rounded-xl text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#493528] mx-auto mb-4"></div>
          <p>Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: { theme: "stripe", variables: { colorPrimary: "#493528" } },
      }}
    >
      <StripeCheckoutForm donationData={donationData} />
    </Elements>
  );
}
