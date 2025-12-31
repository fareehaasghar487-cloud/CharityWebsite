import express from "express";
import {
  createDonation,
  getAllDonations,
  deleteDonation,
  updateDonation,
  getUserDonations,
  createPaymentIntent,
  confirmPayment,
} from "../Controllers/DonationController.js";
import upload from "../MiddleWare/multer.js";
import {LoginRequired} from "../Auth/LoginRequired.js"

const router = express.Router();

// Create a donation
router.post("/create-donation", LoginRequired ,upload.single("documentImg"), createDonation);

// Stripe: create payment intent
router.post("/create-payment-intent", createPaymentIntent);

// Stripe: confirm payment (optional recording)
router.post("/confirm-payment", confirmPayment);

// Get all donations
router.get("/get-all-donations", getAllDonations);

// Delete a donation by ID
router.delete("/delete-donation/:id", deleteDonation);

// Update/Edit a donation by ID
router.put("/update-donation/:id", upload.single("documentImg"), updateDonation);
router.get("/get-user-donation", LoginRequired, getUserDonations);
export default router;
