import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { setUser } from "../Auth/jwt.js";
import { generateotp } from "../MiddleWare/generateotp.js";
import sendMail from "../MiddleWare/sendMail.js";
import { asyncHandler } from "../MiddleWare/utils.js";

// Signup API
export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "This email is already registered, please try another email",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const otp = generateotp();
  const otpExpires = Date.now() + 10 * 60 * 1000;

  const newUser = await User.create({
    name,
    email,
    password: hashPassword,
    otp,
    otpExpires,
    isVerified: false,
  });

  const subject = "Welcome to Our Website 🎉";
  const html = `
    <h1>Welcome, ${name}!</h1>
    <p>We're excited to have you join us.</p>
    <p><strong>Your OTP is: ${otp}</strong></p>
    <p>This OTP will expire in 10 minutes.</p>
    <br>
    <p>Best Regards,<br>Your Website Team</p>
  `;

  await sendMail(email, subject, html);

  res.status(200).json({
    message: "User created successfully. Check your email to verify your account.",
  });
});

// Verify OTP API
export const verifyUser = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.otp !== otp) return res.status(400).json({ message: "Invalid or expired OTP" });
  if (user.otpExpires < Date.now()) return res.status(400).json({ message: "OTP has expired" });

  user.isVerified = true;
  await user.save();

  res.status(200).json({ message: "Your account verified successfully" });
});

// Login API
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User with this email not found" });

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) return res.status(400).json({ message: "Email or password is incorrect" });
  if (!user.isVerified) return res.status(401).json({ message: "Your account is not verified" });

  const token = await setUser(user);
  res.cookie("token", token);

  res.status(200).json({ message: "Login successful", user });
});

// Forget Password API
export const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const otp = generateotp();
  user.otp = otp;
  user.otpExpires = Date.now() + 10 * 60 * 1000;
  await user.save();

  const html = `
    <h3>Reset your password</h3>
    <p>Your OTP is: <b>${otp}</b></p>
    <p>It will expire in 10 minutes.</p>
  `;

  await sendMail(email, "Reset Password OTP", html);
  res.status(200).json({ message: "OTP sent to your email" });
});

// Reset Password API
export const resetPassword = asyncHandler(async (req, res) => {
  const { email, otp, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.otp !== otp || user.otpExpires < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  user.password = hashedPassword;
  user.otp = null;
  user.otpExpires = null;
  await user.save();

  res.status(200).json({ message: "Password reset successfully" });
});

// Get All Users
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});
//get One User
export const getOneUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

// Delete User
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) return res.status(404).json({ message: "User not found" });

  res.status(200).json({ message: "User deleted successfully" });
});

// Logout API
export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

// My Profile
export const myProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ user: req.user });
});

// Change Password
export const changePassword = asyncHandler(async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) return res.status(400).json({ message: "Old password is incorrect" });

  user.password = await bcrypt.hash(newPassword, 10);
  await user.save();

  res.status(200).json({ message: "Password changed successfully" });
});

// Update Profile
export const updateProfile = asyncHandler(async (req, res) => {
  const { name, phone, address } = req.body;
  const profileImage = req.file?.path;

  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    { name, phone, address, profileImage },
    { new: true }
  );

  if (!updatedUser) return res.status(404).json({ message: "User not found" });

  res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
});

