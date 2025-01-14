const { Response } = require("../utilities/apiResponse");
const productModel = require("../model/product.model");
const { uploadToCloudinary } = require("../utilities/cloudinary");
const NodeCache = require("node-cache");
const myCache = new NodeCache();

//
// create Product
const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      colors,
      stock,
      size,
      discountPercentage,
      category,
    } = req.body;
    const { images } = req.files;

    if (!title || !description || !price || !colors || !stock || !images) {
      return res
        .status(400)
        .json(new Response(400, null, null, "product information missing"));
    }
    // find if product already exists
    const findResult = await productModel.findOne({ title: title });
    if (findResult) {
      return res
        .status(401)
        .json(new Response(401, null, null, "product already exists"));
    }

    // upload images to cloudinary
    const uploadUrl = [];
    await Promise.all(
      images.map(async (element) => {
        const { secure_url } = await uploadToCloudinary(element?.path);
        uploadUrl.push(secure_url);
      })
    );

    // create a new product
    const createResult = await productModel.create({
      title,
      description,
      price,
      colors,
      stock,
      images: uploadUrl,
      ...(size && { size: size }),
      ...(discountPercentage && { discountPercentage: discountPercentage }),
      ...(category && { category: category }),
    });

    if (!createResult) {
      return res
        .status(401)
        .json(new Response(401, null, createResult, "product already exists"));
    }

    return res
      .status(200)
      .json(new Response(200, "product created", createResult, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `create product controller error`, null, error));
  }
};

//
// get all product
const getAllProduct = async (_, res) => {
  try {
    const cachedValue = myCache.get("allProduct");
    if (cachedValue === undefined) {
      const findResult = await productModel.find();

      if (!findResult.length) {
        return res
          .status(400)
          .json(new Response(400, null, null, "cant find any product"));
      }
      myCache.set("allProduct", JSON.stringify(findResult));
      return res
        .status(200)
        .json(new Response(200, "here you go", findResult, null));
    }

    return res
      .status(200)
      .json(
        new Response(200, "data from cached", JSON.parse(cachedValue), null)
      );
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `get all product controller error`, null, error));
  }
};

//
// get a single product
const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await productModel.findById(id);

    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, "can't find requested product", null, null));
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findResult, null));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, `get single product controller error`, null, error)
      );
  }
};

//
// update or edit a product
const updateProductDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const updateResult = await productModel
      .findOneAndUpdate({ _id: id }, { ...req.body }, { new: true })
      .select(-"images");

    if (!updateResult) {
      return res
        .status(500)
        .json(new Response(500, null, null, "update request failed"));
    }

    return res
      .status(200)
      .json(new Response(200, "updated succefully", updateResult, false));
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json(
        new Response(
          500,
          `update product details controller error`,
          null,
          error
        )
      );
  }
};

//
// update product photo
const updateProductPhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { imageInfo } = req.body;

    if (!imageInfo.length) {
      return res
        .status(200)
        .json(new Response(200, "image missing", null, false));
    }
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, `update product image controller error`, null, error)
      );
  }
};

//
//  delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await productModel.findByIdAndDelete(id);
    if (!deleteResult) {
      return res
        .status(200)
        .json(
          new Response(200, "unable to delete requested product", null, false)
        );
    }
    return res
      .status(200)
      .json(
        new Response(200, "delete product successfully", deleteResult, false)
      );
  } catch (error) {}
};

module.exports = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProductDetails,
  updateProductPhoto,
  deleteProduct,
};
