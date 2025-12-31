import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoutes from "./Routes/userRoutes.js";
import campaignRoutes from "./Routes/campaignRoutes.js";
import donationRoutes from "./Routes/donationRoutes.js";
import beneficiaryRoutes from "./Routes/beneficiaryRoutes.js";
import charityRoutes from "./Routes/charityRoutes.js";
import summaryRoute from "./Routes/summaryRoute.js";
import reportRoutes from "./Routes/reportRoutes.js"
import { stripeWebhook } from "./Controllers/DonationController.js";
const app = express();
const PORT = 5000;

// Middleware
// Stripe webhook needs the raw body for signature verification
app.post('/webhook', express.raw({ type: 'application/json' }), stripeWebhook);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Database connection
mongoose
  .connect("mongodb+srv://fareehaasghar487_db_user:charity@cluster0.asnuo9t.mongodb.net/realcharity?retryWrites=true&w=majority")
  .then(() => console.log("✅ Database is connected successfully"))
  .catch((err) => console.log("❌ Error in connecting database", err));

// Routes
app.use(userRoutes);
app.use("/api", campaignRoutes);
app.use("/api",donationRoutes);
app.use(beneficiaryRoutes);
app.use(charityRoutes);
app.use(summaryRoute);
app.use(reportRoutes);

// Test route
app.get("/hello", (req, res) => {
  res.send("Backend is running....");
});

// ✅ Error-handling middleware (must be at the end)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",  
    error: err,
  });
});
// Start server
app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));



//mongodb+srv://fareehaasghar487_db_user:charity@cluster0.asnuo9t.mongodb.net

//mongodb://localhost:27017