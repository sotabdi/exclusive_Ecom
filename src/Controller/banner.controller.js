const bannerModel = require("../model/banner.model");
const { Response } = require("../utilities/apiResponse");
const {
  uploadToCloudinary,
  deleteCloudinary,
} = require("../utilities/cloudinary");

//
// upload banner photo
const createBanner = async (req, res) => {
  try {
    const { title } = req.body;
    const { image } = req.files;

    if (!title || !image) {
      return res
        .status(400)
        .json(new Response(400, null, null, "image and name required"));
    }

    // check is already exist
    const isExist = await bannerModel.findOne({ title });
    if (isExist) {
      return res
        .status(400)
        .json(new Response(400, null, null, "this banner already exist"));
    }

    // upload to cloudinary
    const { path } = image[0];
    const { secure_url } = await uploadToCloudinary(path);

    const createBanner = await bannerModel.create({ title, image: secure_url });

    if (!createBanner) {
      return res
        .status(500)
        .json(new Response(500, null, null, "unable to create banner"));
    }

    return res
      .status(200)
      .json(
        new Response(200, "banner created successfully", createBanner, false)
      );
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "create banner controller error", null, error));
  }
};

//
// get all banner
const getallbanner = async (_, res) => {
  try {
    const findbanner = await bannerModel.find();
    if (!findbanner) {
      return res
        .status(400)
        .json(
          new Response(400, null, null, "you dont have any banner in databae")
        );
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findbanner, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "get all banner controller error", null, error));
  }
};

//
// get a single banner
const getSingleBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await bannerModel.findById(id);
    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, null, null, "requested banner not found"));
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "get a single banner controller error", null, error)
      );
  }
};

//
// edit or update banner
const updateBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req?.body;

    if (!title && !req.files?.image?.length) {
      return res
        .status(400)
        .json(new Response(400, null, null, "image or title is required"));
    }

    const findResult = await bannerModel.findById(id);
    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, null, null, "cant find requested product"));
    }

    //
    let updateObject = {};

    title && (updateObject.title = title);

    if (req.files?.image?.length) {
      // delete old one from cloudinary
      const dburl = findResult.image.split("/");
      const cloudinaryUrl = dburl[dburl.length - 1].split(".").shift();
      await deleteCloudinary(cloudinaryUrl);
      // update new img
      const { path } = req.files?.image[0];
      const { secure_url } = await uploadToCloudinary(path);
      updateObject.image = secure_url;
    }

    const updateddb = await findResult.set(updateObject).save();

    if (!updateddb) {
      return res
        .status(500)
        .json(new Response(400, null, null, "failed to update banner"));
    }

    return res
      .status(200)
      .json(new Response(200, "updated successfully", updateddb, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "update banner controller error", null, error));
  }
};

//
// delete banner
const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await bannerModel.findByIdAndDelete(id);

    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, null, null, "requested product not found"));
    }

    // delete from cloudinary
    const imgurl = findResult.image.split("/");
    const cloudinaryUrl = imgurl[imgurl.length - 1].split(".").shift();
    await deleteCloudinary(cloudinaryUrl);

    return res
      .status(200)
      .json(new Response(200, "deleted successfully", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "delete banner controller error", null, error));
  }
};
module.exports = { createBanner, getallbanner, getSingleBanner, updateBanner,deleteBanner };
