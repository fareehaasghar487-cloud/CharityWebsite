// import React, { useState, useEffect } from "react";
// import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { toast } from "react-hot-toast";
// import { useLoginMutation } from "../../../Redux/slices/UserApi";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../../Redux/slices/authSlice";

// export default function LoginForm() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [showPassword, setShowPassword] = useState(false);
//   const [login] = useLoginMutation();
//   const [formData, setFormData] = useState({ email: "", password: "" });

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await login(formData).unwrap();

//       // Save user in Redux & localStorage
//       dispatch(setUser(response.user));

//       // Only go to OTP if not verified
//       if (response.isVerified === false) {
//         toast.success("OTP sent to your email");
//         localStorage.setItem("otpEmail", formData.email);
//         navigate("/verify-otp", { state: { email: formData.email } });
//         return;
//       }

//       toast.success("Login Successfully");
//       navigate("/"); // go home after login
//     } catch (error) {
//       toast.error(error?.data?.message || "Login failed");
//     }
//   };

//   useEffect(() => { AOS.init({ duration: 1000, once: true }); }, []);

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4 py-32 bg-[#F7EFEA]">
//       <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border" style={{ borderColor: "#543D2E40" }}>
//         <div className="py-6 px-4 sm:px-8 text-center" style={{ backgroundColor: "#82143520" }}>
//           <h1 className="font-serif text-2xl sm:text-3xl font-bold" data-aos="zoom-out-up" style={{ color: "#543D2E" }}>
//             Join The Movement
//           </h1>
//         </div>
//         <div className="p-6 sm:p-8">
//           <div className="mb-4">
//             <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>Email Address</label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-full pl-10 pr-4 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }}
//               />
//             </div>
//           </div>
//           <div className="mb-6">
//             <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>Password</label>
//             <div className="relative">
//               <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
//                 style={{ borderColor: "#543D2E40", color: "#543D2E" }}
//               />
//               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2" style={{ color: "#821435" }}>
//                 {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
//               </button>
//             </div>
//           </div>
//           <div className="text-right mb-6">
//             <Link to="/forgot-password" className="text-sm font-medium" style={{ color: "#821435" }}>Forgot Password?</Link>
//           </div>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="w-full font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl"
//             style={{ backgroundColor: "#821435", color: "white" }}
//             onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#543D2E")}
//             onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#821435")}
//           >
//             Login
//           </button>
//           <div className="mt-6 text-center font-medium">
//             <span style={{ color: "#543D2E" }}>Don't have an account? </span>
//             <Link to="/signup" className="hover:underline" style={{ color: "#821435" }}>Sign Up</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useLoginMutation } from "../../../Redux/slices/UserApi";
import { useDispatch } from "react-redux";
import { setUser } from "../../../Redux/slices/authSlice";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData).unwrap();

      // Save user in Redux & localStorage
      dispatch(setUser(response.user));
      localStorage.setItem("user", JSON.stringify(response.user));

      // If not verified, go to OTP
      if (response.isVerified === false) {
        toast.success("OTP sent to your email");
        localStorage.setItem("otpEmail", formData.email);
        navigate("/verify-otp", { state: { email: formData.email } });
        return;
      }

      toast.success("Login Successfully");

      // Redirect based on role
      if (response.user.role === "Admin") {
      navigate("/"); // Admin goes to home first, not dashboard
       } else {
          navigate("/"); // normal user also goes to home
      }
    } catch (error) {
      toast.error(error?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-32 bg-[#F7EFEA]">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-lg overflow-hidden border" style={{ borderColor: "#543D2E40" }}>
        <div className="py-6 px-4 sm:px-8 text-center" style={{ backgroundColor: "#82143520" }}>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold" style={{ color: "#543D2E" }}>
            Join The Movement
          </h1>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-4">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>Email Address</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
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
          <div className="mb-6">
            <label className="block font-semibold mb-2" style={{ color: "#543D2E" }}>Password</label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2" size={18} style={{ color: "#821435" }} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-lg outline-none focus:ring-1 transition-all duration-200"
                style={{ borderColor: "#543D2E40", color: "#543D2E" }}
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2" style={{ color: "#821435" }}>
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>
          <div className="text-right mb-6">
            <Link to="/forgot-password" className="text-sm font-medium" style={{ color: "#821435" }}>Forgot Password?</Link>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full font-bold py-2 px-4 rounded transform hover:scale-101 transition-all duration-300 shadow-lg hover:shadow-xl"
            style={{ backgroundColor: "#821435", color: "white" }}
          >
            Login
          </button>
          <div className="mt-6 text-center font-medium">
            <span style={{ color: "#543D2E" }}>Don't have an account? </span>
            <Link to="/signup" className="hover:underline" style={{ color: "#821435" }}>Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

