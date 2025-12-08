import { asyncHandler } from "../MiddleWare/utils.js";
import Campaign from "../models/Campaign.js";

// Create a new campaign
export const createCampaign = asyncHandler(async (req, res) => {
  const { title, category, goalAmount, raisedAmount, status, startDate, endDate, description } = req.body;

  let imageUrl = null;
  if (req.file) {
    imageUrl = req.file.path; // Cloudinary URL
  }

  const campaign = new Campaign({
    title,
    category,
    goalAmount,
    raisedAmount,
    status,
    startDate,
    endDate,
    description,
    image: imageUrl,
    isFunded: raisedAmount >= goalAmount
  });

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
  const campaign = await Campaign.findById(req.params.id);
  if (!campaign) {
    res.status(404);
    throw new Error("Campaign not found");
  }

  // Update campaign fields
  Object.assign(campaign, req.body);

  // Update funded status based on raisedAmount vs goalAmount
  campaign.isFunded = campaign.raisedAmount >= campaign.goalAmount;

  const updatedCampaign = await campaign.save();
  res.status(200).json(updatedCampaign);
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

// Add donation to campaign
export const addDonation = asyncHandler(async (req, res) => {
  const { campaignId, amount } = req.body;

  const campaign = await Campaign.findById(campaignId);
  if (!campaign) {
    res.status(404);
    throw new Error("Campaign not found");
  }

  // Increment raisedAmount
  campaign.raisedAmount += Number(amount);

  // Update funded status
  campaign.isFunded = campaign.raisedAmount >= campaign.goalAmount;

  const updatedCampaign = await campaign.save();
  res.status(200).json(updatedCampaign);
});
