import mongoose from "mongoose";
import User from "./User.js"
const donationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String},
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String },
  documentImg: { type: String },
  preference: { type: String },
  confirmation: { type: String, enum: ["Pending", "Confirmed"], default: "Pending" },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  // campaign: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Campaign",
  //   required: true,
  // },
});

const Donation = mongoose.model("Donation", donationSchema);

// ✅ Correct default export
export default Donation;
