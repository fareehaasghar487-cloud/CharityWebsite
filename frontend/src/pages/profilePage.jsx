import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useGetProfileQuery, useUpdateProfileMutation } from "../../Redux/slices/UserApi.js";

const ProfilePage = () => {
  const { data: user, isLoading } = useGetProfileQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateProfileMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profileImg: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        profileImg: user.profileImage || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImg") {
      setFormData({ ...formData, profileImg: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("name", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      if (formData.profileImg instanceof File) {
        data.append("profileImage", formData.profileImg);
      }

      await updateProfile(data).unwrap();
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update profile!");
    }
  };

  if (isLoading) return <p className="text-center mt-32">Loading...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-6 text-[#4a342d] text-center">
          My Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Image */}
          <div className="flex items-center gap-4">
            <img
              src={
                formData.profileImg instanceof File
                  ? URL.createObjectURL(formData.profileImg)
                  : formData.profileImg
              }
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-gray-700"
            />
            <input
              type="file"
              name="profileImg"
              accept="image/*"
              onChange={handleChange}
              className="cursor-pointer"
            />
          </div>

          {/* Full Name */}
          <div>
            <label className="block mb-1 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a342d]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a342d]"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block mb-1 font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4a342d]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={updating}
            className="bg-[#4a342d] text-white px-6 py-2 rounded-md hover:bg-[#38261e] transition w-full disabled:opacity-50"
          >
            {updating ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
