import express from "express";
import {
  signup,
  login,
  logout,
  forgetPassword,
  resetPassword,
  getAllUsers,
  getOneUser,
  deleteUser,
  myProfile,
  changePassword,
  updateProfile,
} from "../Controllers/UserControllers.js"; // Make sure the path and casing match


import { LoginRequired } from "../Auth/LoginRequired.js";
import upload from "../MiddleWare/multer.js";

const router = express.Router();

// Public routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/forget-password", forgetPassword);
router.post("/reset-password", resetPassword);
router.post("/logout", logout);

// Protected routes (require authentication)
router.get("/my-profile", LoginRequired, myProfile);
router.put("/change-password", LoginRequired, changePassword);
router.put("/update-profile", LoginRequired, upload.single("profileImage"), updateProfile);

// Admin routes (optional: can add admin middleware)
router.get("/get-all-users", LoginRequired, getAllUsers);
router.get("/get-one-user/:id", LoginRequired, getOneUser);
router.delete("/delete-user/:id", LoginRequired, deleteUser);

export default router;
