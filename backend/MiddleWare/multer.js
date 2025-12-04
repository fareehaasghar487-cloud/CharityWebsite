 import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";


cloudinary.config({
    cloud_name: "dvgbjwisl",
    api_key:"493968856583398",
    api_secret:"iyULYqDB3KhmqsVR0PpxN0vmzkQ",

});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "events",
    allowed_formats: ["jpg", "png", "jpeg"],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });
export default upload;
