import express from "express";
import {
  createCampaign,
  getAllCampaigns,
  getCampaignById,
  updateCampaign,
  deleteCampaign,
} from "../Controllers/CampaignControllers.js";
import upload from "../MiddleWare/multer.js";


const router = express.Router();

router.post("/create-campaign", upload.single("image"), createCampaign);
router.get("/get-all-campaigns", getAllCampaigns);
router.get("/get-one-campaign/:id", getCampaignById);
router.put("/update-campaign/:id", upload.single("image"), updateCampaign);
router.delete("/delete-campaign/:id", deleteCampaign);

export default router;
