import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors())

// Database connection
mongoose
  .connect("mongodb+srv://fareehaasghar487_db_user:charity@cluster0.asnuo9t.mongodb.net")
  .then(() => console.log("✅ Database is connected successfully"))
  .catch((err) => console.log("❌ Error in connecting database", err));

app.get("/", (req, res) => {
  res.send("Backend is running....");
});
import userRoutes from "./Routes/userRoutes.js";
import campaignRoutes from "./Routes/campaignRoutes.js";
app.use(userRoutes);
app.use(campaignRoutes);


app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
