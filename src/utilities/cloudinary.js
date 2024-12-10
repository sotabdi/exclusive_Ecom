const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadToCloudinary = async (path) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(path);
    if (uploadResult) {
      fs.unlinkSync(path);
      return uploadResult;
    }
  } catch (error) {
    console.log("error from upload cloudinary" + error);
  }
};

const deleteCloudinary = async (path) => {
  try {
    const deleteResult = await cloudinary.api.delete_resources([path], {
      type: "upload",
      resource_type: "image",
    });
    return deleteResult
  } catch (error) {
    console.log("error from delete cloudinary" + error);
  }
};

module.exports = { uploadToCloudinary,deleteCloudinary };
