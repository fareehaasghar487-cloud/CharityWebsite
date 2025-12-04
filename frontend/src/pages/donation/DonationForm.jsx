import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaHandHoldingHeart,
  FaCalendar,
  FaTelegramPlane,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineFileProtect } from "react-icons/ai";
import toast from "react-hot-toast";

export default function DonationForm() {
  const navigate = useNavigate();

  // ✅ FIXED INITIAL STATE (same as first code)
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
    documentImg: null,
    preference: "",
    confirmation: "Pending",
  });

  // ✅ FIXED CHANGE HANDLER (same as first code)
  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;

    if (name === "documentImg") {
      setFormData({ ...formData, documentImg: files[0] });
    } 
    else if (type === "checkbox") {
      setFormData({
        ...formData,
        confirmation: checked ? "Confirmed" : "Pending",
      });
    } 
    else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // ✅ FIXED SUBMIT HANDLER (same as first code)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // ✅ Fixed field names to match backend (from first code)
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("phoneNumber", formData.phoneNumber);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("preference", formData.preference);
      formDataToSend.append("confirmation", formData.confirmation);

      if (formData.documentImg) {
        formDataToSend.append("documentImg", formData.documentImg);
      }

      const res = await axios.post(
        "http://localhost:8000/api/v1/user/donation",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(res.data);
      toast.success(res.data.message || "Donation submitted successfully!");

      // ✅ FIXED FORM RESET (same as first code)
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        subject: "",
        message: "",
        documentImg: null,
        preference: "",
        confirmation: "Pending",
      });
      navigate("/");

    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40">
      <div className="max-w-3xl fixed z-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto bg-white rounded-xl shadow-2xl overflow-hidden w-full max-h-[90vh]">
        {/* Header */}
        <div className="bg-[#493528] px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl text-white">
                <FaHandHoldingHeart />
              </span>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Support Our Mission
                </h1>
                <p className="text-gray-200 mt-1">
                  Fill out the form below to volunteer, donate, or ask us
                  anything.
                </p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="text-white text-xl font-bold cursor-pointer hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors"
            >
              ✕
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <CgProfile className="text-[#493528] text-lg" />
                <h2 className="text-lg font-semibold text-[#493528] border-b border-[#493528] pb-2 w-full">
                  Personal Information
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-[#493528] mb-2"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <CgProfile className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#493528]" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-[#493528] mb-2"
                  >
                    Phone Number (WhatsApp)*
                  </label>
                  <div className="relative">
                    <SlPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#493528]" />
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#493528] mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <MdOutlineEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#493528]" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {/* How Would You Like to Help Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <IoMdHeartEmpty className="text-[#493528] text-lg" />
                <h2 className="text-lg font-semibold text-[#493528] border-b border-[#493528] pb-2 w-full">
                  How Would You Like to Help?
                </h2>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#493528] mb-2"
                >
                  I Want To *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent text-[#493528]"
                >
                  <option value="">Select an option</option>
                  <option value="Make A Donation">Make A Donation</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Corporate Sponsorship">
                    Corporate Sponsorship
                  </option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>
            </div>

            {/* Your Message Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <MdOutlineEmail className="text-[#493528] text-lg" />
                <h2 className="text-lg font-semibold text-[#493528] border-b border-[#493528] pb-2 w-full">
                  Your Message
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#493528] mb-2"
                  >
                    Why do you want to support our cause? *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent"
                    placeholder="Tell us why you want to support our cause..."
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="documentImg"
                    className="block text-sm font-medium text-[#493528] mb-2"
                  >
                    Upload Documents (Optional)
                  </label>
                  <input
                    type="file"
                    name="documentImg"
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent"
                  />
                  <p className="text-xs text-gray-600 mt-2">
                    Upload relevant documents (PDF, Word, Images) Max file size:
                    10MB, Max files: 5
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Preference Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <SlPhone className="text-[#493528] text-lg" />
                <h2 className="text-lg font-semibold text-[#493528] border-b border-[#493528] pb-2 w-full">
                  Contact Preference
                </h2>
              </div>
              <div>
                <label
                  htmlFor="preference"
                  className="block text-sm font-medium text-[#493528] mb-2"
                >
                  How would you prefer us to contact you? *
                </label>
                <select
                  name="preference"
                  value={formData.preference}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-[#493528] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#493528] focus:border-transparent text-[#493528]"
                >
                  <option value="">Select preferred contact method</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                  <option value="Whatsapp">WhatsApp</option>
                  <option value="Any Method">Any Method</option>
                </select>
              </div>
            </div>

            {/* Consent & Agreement Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <AiOutlineFileProtect className="text-[#493528] text-lg" />
                <h2 className="text-lg font-semibold text-[#493528] border-b border-[#493528] pb-2 w-full">
                  Consent & Agreement
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="confirmation"
                    checked={formData.confirmation === "Confirmed"}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#493528] border-[#493528] rounded focus:ring-[#493528]"
                  />
                  <p className="text-sm text-gray-600">
                    I confirm that the information I've provided is accurate and
                    I consent to being contacted via my selected method. I agree
                    to the Privacy Policy and understand my data will be
                    processed for the purpose of handling this request.
                  </p>
                </div>
                <div className="flex items-center space-x-3 bg-[#493528]/10 p-4 rounded-lg border border-[#493528]/20">
                  <span className="text-[#493528]">🔒</span>
                  <p className="text-sm text-[#493528]">
                    Your details are kept confidential and won't be shared
                    without permission.
                  </p>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="border-t border-[#493528] pt-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-2 text-sm text-[#493528]">
                  <FaCalendar className="text-[#493528]" />
                  <span>We usually respond within 1-2 working days.</span>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    type="button"
                    className="px-6 cursor-pointer py-2 border border-[#493528] text-[#493528] rounded-lg hover:bg-[#493528] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#493528] transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 cursor-pointer bg-[#493528] text-white rounded-lg hover:bg-[#3a2a1f] focus:outline-none focus:ring-2 focus:ring-[#493528] transition-colors flex items-center space-x-2"
                  >
                    <FaTelegramPlane />
                    <span>Submit via WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

