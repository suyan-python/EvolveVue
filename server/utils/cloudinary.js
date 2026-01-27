import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Init Cloudinary config only when called
export const initCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  console.log("Cloudinary ENV checkkk:", {
    cloud: process.env.CLOUDINARY_CLOUD_NAME ? "OK" : "MISSING",
    key: process.env.CLOUDINARY_API_KEY ? "OK" : "MISSING",
    secret: process.env.CLOUDINARY_API_SECRET ? "OK" : "MISSING",
  });
};

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "raw",
      folder: "resumes",
      type: "upload", // 👈 ensures public delivery
      access_mode: "public", // 👈 VERY IMPORTANT
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    console.log("Cloudinary upload error:", error.message);
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
    return null;
  }
};
