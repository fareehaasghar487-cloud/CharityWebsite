import { asyncHandler } from "../MiddleWare/utils.js";
import Campaign from "../models/Campaign.js";

// CREATE CAMPAIGN
export const createCampaign = asyncHandler(async (req, res) => {
  console.log("REQ.BODY:", req.body);
  console.log("REQ.FILE:", req.file);
  try {
    const {
      title,
      category,
      goalAmount,
      raisedAmount,
      status,
      startDate,
      endDate,
      description,
    } = req.body;

    if (!title || !category || !goalAmount || !startDate || !endDate) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const goalAmountNum = Number(goalAmount);
    const raisedAmountNum = Number(raisedAmount || 0);

    // Image from Cloudinary
    let imageUrl = null;
    try {
      if (req.file && req.file.path) {
        imageUrl = req.file.path; // Cloudinary URL
      }
    } catch (err) {
      console.error("Cloudinary upload error:", err);
      return res.status(500).json({ message: "Image upload failed" });
    }

    const campaign = new Campaign({
      title,
      category,
      goalAmount: goalAmountNum,
      raisedAmount: raisedAmountNum,
      status: status || "Pending",
      startDate,
      endDate,
      description: description || "",
      image: imageUrl,
      isFunded: raisedAmountNum >= goalAmountNum,
    });

    const savedCampaign = await campaign.save();

    res.status(201).json({
      success: true,
      message: "Campaign created successfully",
      campaign: savedCampaign,
    });
  } catch (error) {
    console.error("CREATE CAMPAIGN ERROR:", error);
    res.status(500).json({ message: error.message || "Server error" });
  }
});
// GET ALL
export const getAllCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find();
  res.status(200).json(campaigns);
});

// GET ONE
export const getCampaignById = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    return res.status(404).json({ message: "Campaign not found" });
  }

  res.status(200).json(campaign);
});

// UPDATE CAMPAIGN
export const updateCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);

  if (!campaign) {
    return res.status(404).json({ message: "Campaign not found" });
  }

  // Apply form fields
  Object.assign(campaign, req.body);

  // If new image uploaded
  if (req.file) {
    campaign.image = req.file.path;
  }

  // Funding logic
  campaign.isFunded = campaign.raisedAmount >= campaign.goalAmount;

  const updated = await campaign.save();
  res.status(200).json(updated);
  });

// DELETE CAMPAIGN
export const deleteCampaign = asyncHandler(async (req, res) => {
  const deleted = await Campaign.findByIdAndDelete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: "Campaign not found" });
  }

  res.status(200).json({ message: "Campaign deleted successfully" });
});

// ADD DONATION
export const addDonation = asyncHandler(async (req, res) => {
  const { campaignId, amount } = req.body;

  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    return res.status(404).json({ message: "Campaign not found" });
  }

  campaign.raisedAmount += Number(amount);
  campaign.isFunded = campaign.raisedAmount >= campaign.goalAmount;

  const updated = await campaign.save();
  res.status(200).json(updated);
});
