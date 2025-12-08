import express from "express";
import {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} from "../controllers/campaignController.js";

const router = express.Router();

router.post("/create-campaign", createCampaign);
router.get("/get-all-campaigns", getAllCampaigns);
router.get("/get-one-campaign/:id", getCampaignById);
router.put("/update-campaign/:id", updateCampaign);
router.delete("/delete-campaign/:id", deleteCampaign);

export default router;
