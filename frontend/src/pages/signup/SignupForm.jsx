// import React, { useState, useEffect } from "react";
// import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { toast } from "react-hot-toast";
// import { useSignupMutation } from "../../../Redux/slices/UserApi";

// export default function SignupForm() {
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [signup] = useSignupMutation();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await signup(formData).unwrap();
//       toast.success(response.message || "Signup successful. OTP sent to your email.");
//       // refetch();

//       // Store email for OTP verification
//       localStorage.setItem("otpEmail", formData.email);

//       // Redirect to OTP page
//       navigate("/verify-otp", { state: { email: formData.email } });

//     } catch (error) {
//       toast.error(error?.data?.message || "Signup failed");
//     }
//   };

//   useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-32" style={{ backgroundColor: "#F7EFEA" }}>
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border" style={{ borderColor: "#543D2E40" }}>
//         <div className="py-6 px-4 sm:px-8 text-center" style={{ backgroundColor: "#82143520" }}>
//           <h1 className="font-serif text-2xl sm:text-3xl font-bold" data-aos="zoom-out-up" style={{ color: "#543D2E" }}>Create Hope Today</h1>
//         </div>

//         <div className="p-6 sm:p-8">
//           {/* Name */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2" data-aos="zoom-in-up" style={{ color: "#543D2E" }}>Full Name</label>
//             <div className="relative">
//               <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }} />
//             </div>
//           </div>

//           {/* Email */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2" data-aos="zoom-in-up" style={{ color: "#543D2E" }}>Email Address</label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }} />
//             </div>
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label className="block font-semibold mb-2" data-aos="zoom-in-up" style={{ color: "#543D2E" }}>Password</label>
//             <div className="relative">
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password"
//                 className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }} />
//               <button type="button" onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2" style={{ color: "#821435" }}>
//                 {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//               </button>
//             </div>
//           </div>

//           {/* Confirm Password */}
//           <div className="mb-6">
//             <label className="block font-semibold mb-2" data-aos="zoom-in-up" style={{ color: "#543D2E" }}>Confirm Password</label>
//             <div className="relative">  
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password"
//                 className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }} />
//               <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 transform -translate-y-1/2" style={{ color: "#821435" }}>
//                 {showConfirmPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//               </button>
//             </div>
//           </div>

//           <button onClick={handleSubmit} type="submit"
//             className="w-full font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl"
//             style={{ backgroundColor: "#821435", color: "white" }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#543D2E")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#821435")}>
//             Sign Up
//           </button>

//           <div className="mt-6 text-center font-medium">
//             <span style={{ color: "#543D2E" }}>Already have an account? </span>
//             <Link to="/login" className="hover:underline" style={{ color: "#821435" }}>Login</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash, FaPhone } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-hot-toast";
import { useSignupMutation } from "../../../Redux/slices/UserApi";

export default function SignupForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [signup] = useSignupMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.phone) {
      toast.error("Phone number is required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await signup(formData).unwrap();
      toast.success(response.message || "Signup successful. OTP sent to your email.");

      localStorage.setItem("otpEmail", formData.email);
      navigate("/verify-otp", { state: { email: formData.email } });

    } catch (error) {
      toast.error(error?.data?.message || "Signup failed");
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
        <div
          className="py-6 px-4 sm:px-8 text-center"
          style={{ backgroundColor: "#82143520" }}
        >
          <h1
            className="font-serif text-2xl sm:text-3xl font-bold"
            data-aos="zoom-out-up"
            style={{ color: "#543D2E" }}
          >
            Create Hope Today
          </h1>
        </div>

        <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="mb-4">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>
              Full Name
            </label>
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#821435" }} />
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>
              Phone Number
            </label>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#821435" }} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XXXXXXXXX"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#821435" }} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full pl-10 pr-4 py-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#821435" }} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="w-full pl-10 pr-10 py-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>
              Confirm Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "#821435" }} />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                required
                className="w-full pl-10 pr-10 py-2 border rounded-lg"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full font-bold py-2 rounded-lg shadow-lg transition"
            style={{ backgroundColor: "#821435", color: "white" }}
          >
            Sign Up
          </button>

          <div className="mt-6 text-center font-medium">
            <span style={{ color: "#543D2E" }}>Already have an account? </span>
            <Link to="/login" className="hover:underline" style={{ color: "#821435" }}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
 