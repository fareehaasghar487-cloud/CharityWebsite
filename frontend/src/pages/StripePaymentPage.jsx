// import React, { useState, useEffect, useRef } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   PaymentElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// function StripeCheckoutForm({ donationData }) {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) return;

//     setIsLoading(true);
//     setMessage(null);

//     try {
//       const { error, paymentIntent } = await stripe.confirmPayment({
//         elements,
//         confirmParams: {
//           return_url: `${window.location.origin}/payment-complete`,
//         },
//         redirect: "if_required",
//       });

//       if (error) {
//         setMessage(error.message);
//         setIsLoading(false);
//         return;
//       }

//       if (paymentIntent) {
//         switch (paymentIntent.status) {
//           case "succeeded":
//             setMessage("Payment successful! Thank you for your donation.");
//             // Send confirmation to backend
//             await fetch(`${import.meta.env.VITE_API_URL}/confirm-payment`, {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({ paymentIntentId: paymentIntent.id }),
//             });
//             setTimeout(() => navigate("/success"), 3000);
//             break;
//           case "processing":
//             setMessage("Your payment is processing.");
//             break;
//           case "requires_payment_method":
//             setMessage("Please try again with a different payment method.");
//             break;
//           default:
//             setMessage("Something went wrong.");
//             break;
//         }
//       }
//     } catch (error) {
//       console.error("Payment confirmation error:", error);
//       setMessage("An error occurred during payment processing.");
//     }

//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black/60 p-4">
//       <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
//         <h2 className="text-xl font-bold mb-4 text-[#493528]">Complete Your Donation</h2>

//         <div className="mb-6 p-4 bg-gray-50 rounded-lg">
//           <p className="text-sm mb-2">
//             <span className="font-semibold">Donation For:</span> {donationData.subject}
//           </p>
//           <p className="text-sm mb-2">
//             <span className="font-semibold">Amount:</span> ₹{donationData.price}
//           </p>
//           <p className="text-sm">
//             <span className="font-semibold">Donor:</span> {donationData.fullName}
//           </p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {/* Stripe Payment Element */}
//           <div className="border rounded-md p-3">
//             <PaymentElement
//               options={{
//                 layout: "tabs",
//                 defaultValues: {
//                   billingDetails: {
//                     name: donationData.fullName,
//                     email: donationData.email,
//                   },
//                 },
//               }}
//             />
//           </div>

//           {message && (
//             <div
//               className={`p-3 rounded text-sm ${
//                 message.includes("success")
//                   ? "bg-green-100 text-green-700"
//                   : message.includes("Error")
//                   ? "bg-red-100 text-red-700"
//                   : "bg-yellow-100 text-yellow-700"
//               }`}
//             >
//               {message}
//             </div>
//           )}

//           <button
//             type="submit"
//             disabled={!stripe || isLoading}
//             className="w-full bg-[#493528] text-white py-3 rounded-lg hover:bg-[#3a2a1f] disabled:opacity-50 disabled:cursor-not-allowed font-medium"
//           >
//             {isLoading ? (
//               <span className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Processing...
//               </span>
//             ) : (
//               `Pay ₹${donationData.price}`
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default function StripePaymentPage() {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const donationData = state?.donationData;
//   const [clientSecret, setClientSecret] = useState("");
//   const [backendError, setBackendError] = useState(false);
//   const [message, setMessage] = useState(null);
//   const createdRef = useRef(false);

//   if (!donationData) {
//     navigate("/");
//     return null;
//   }

//   useEffect(() => {
//     const createPaymentIntent = async () => {
//       try {
//         const response = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             amount: donationData.price * 100,
//             currency: "inr",
//             metadata: {
//               subject: donationData.subject,
//               email: donationData.email,
//               fullName: donationData.fullName,
//             },
//           }),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setClientSecret(data.clientSecret);
//       } catch (error) {
//         console.error("Error creating payment intent:", error);
//         setBackendError(true);
//         setMessage("Unable to connect to payment server. Please try again later.");
//       }
//     };

//     if (donationData.price && !createdRef.current) {
//       createdRef.current = true;
//       createPaymentIntent();
//     }
//   }, [donationData]);

//   if (backendError) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black/60">
//         <div className="bg-white p-8 rounded-xl w-full max-w-md shadow-xl text-center">
//           <h2 className="text-xl font-bold mb-4 text-red-600">Connection Error</h2>
//           <p className="mb-4">Unable to connect to payment server.</p>
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-[#493528] text-white py-2 px-4 rounded-lg hover:bg-[#3a2a1f]"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!clientSecret) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black/60">
//         <div className="bg-white p-8 rounded-xl text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#493528] mx-auto mb-4"></div>
//           <p>Loading payment details...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <Elements
//       stripe={stripePromise}
//       options={{
//         clientSecret,
//         appearance: {
//           theme: "stripe",
//           variables: {
//             colorPrimary: "#493528",
//             colorBackground: "#ffffff",
//             colorText: "#30313d",
//           },
//         },
//       }}
//     >
//       <StripeCheckoutForm donationData={donationData} />
//     </Elements>
//   );
// }


import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCreateDonationMutation } from "../../Redux/slices/DonationApi.js";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripeCheckoutForm({ donationData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const [createDonation] = useCreateDonationMutation();

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

        // ✅ Save donation to backend using RTK Query
        await createDonation({
          fullName: donationData.fullName,
          email: donationData.email,
          subject: donationData.subject,
          message: donationData.message || "",
          price: donationData.price,
          confirmation: "Confirmed",
        }).unwrap();

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
          <p className="text-sm mb-2"><span className="font-semibold">Amount:</span> ₹{donationData.price}</p>
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
            {isLoading ? "Processing..." : `Pay ₹${donationData.price}`}
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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/create-payment-intent`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: donationData.price * 100,
            currency: "inr",
            metadata: {
              subject: donationData.subject,
              email: donationData.email,
              fullName: donationData.fullName,
            },
          }),
        });

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
