// models/Report.js
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  campaign: { type: String, required: true },
  type: { type: String, required: true },
  generatedOn: { type: Date, default: Date.now },
  status: { type: String, default: "In Progress" },
});

export default mongoose.model("Report", reportSchema);
