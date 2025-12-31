import express from "express";
import {
  createReport,
  getAllReports,
  getSingleReport,
  deleteReport,
} from "../Controllers/ReportController.js";

const router = express.Router();

/* ================= ROUTES ================= */

// Create report
router.post("/create-report", createReport);

// Get all reports (with filters)
router.get("/get-all-reports", getAllReports);

// Get single report
router.get("/get-one-report/:id", getSingleReport);

// Delete report
router.delete("/delete-report/:id", deleteReport);

export default router;
