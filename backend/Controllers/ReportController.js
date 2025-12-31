import Report from "../models/report.js";

/* ================= CREATE REPORT ================= */
export const createReport = async (req, res) => {
  try {
    const { campaign, type } = req.body;

    if (!campaign || !type) {
      return res.status(400).json({ message: "Campaign and type are required" });
    }

    const report = await Report.create({
      campaign,
      type,
      status: "Generated",
    });

    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET ALL REPORTS ================= */
export const getAllReports = async (req, res) => {
  try {
    const { campaign, type } = req.query;

    let filter = {};

    if (campaign) filter.campaign = campaign;
    if (type) filter.type = type;

    const reports = await Report.find(filter).sort({ generatedOn: -1 });

    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= GET SINGLE REPORT ================= */
export const getSingleReport = async (req, res) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* ================= DELETE REPORT ================= */
export const deleteReport = async (req, res) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
