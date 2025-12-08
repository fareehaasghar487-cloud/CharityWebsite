import { asyncHandler } from "../MiddleWare/utils.js";
import Campaign from "../models/Campaign.js";

// Create a new campaign
export const createCampaign = asyncHandler(async (req, res) => {
  const campaign = new Campaign(req.body);
  const savedCampaign = await campaign.save();
  res.status(201).json(savedCampaign);
});

// Get all campaigns
export const getAllCampaigns = asyncHandler(async (req, res) => {
  const campaigns = await Campaign.find();
  res.status(200).json(campaigns);
});

// Get a single campaign by ID
export const getCampaignById = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) {
    res.status(404);
    throw new Error("Campaign not found");
  }
  res.status(200).json(campaign);
});

// Update a campaign
export const updateCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!campaign) {
    res.status(404);
    throw new Error("Campaign not found");
  }
  res.status(200).json(campaign);
});

// Delete a campaign
export const deleteCampaign = asyncHandler(async (req, res) => {
  const campaign = await Campaign.findByIdAndDelete(req.params.id);
  if (!campaign) {
    res.status(404);
    throw new Error("Campaign not found");
  }
  res.status(200).json({ message: "Campaign deleted successfully" });
});
