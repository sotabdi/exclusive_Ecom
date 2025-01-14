const { Response } = require("../utilities/apiResponse");
const bestSellingModel = require("../model/bestSelling.model");

//
// create best selling
const createBestSelling = async (req, res) => {
  try {
    const { name, product } = req.body;
    if (!name || !product) {
      return res
        .status(400)
        .json(new Response(400, null, null, "invalid credential"));
    }

    const createResult = await bestSellingModel.create({
      name,
      product,
    });

    if (!createResult) {
      return res
        .status(500)
        .json(new Response(500, null, null, "unable to create best selling"));
    }

    return res
      .status(200)
      .json(new Response(200, "created successfully", createResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "create best selling controller", null, error));
  }
};

//
// get all best products
const getAllBestProducts = async (req, res) => {
  try {
    const findResult = await bestSellingModel.find().populate("product");
    if (!findResult.length) {
      return res
        .status(400)
        .json(
          new Response(400, null, null, "you do not have any best product yet")
        );
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "get all best sale product controller", null, error)
      );
  }
};

//
// get single best selling product
const getSingleBestProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await bestSellingModel.findById(id).populate("product");
    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, null, null, "cant find requested product"));
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "get single best product controller", null, error)
      );
  }
};

// update best selling product
const updateBestProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updateResult = await bestSellingModel
      .findByIdAndUpdate({ _id: id }, { ...req.body }, { new: true })
      .populate("product");

    if (!updateResult) {
      return res
        .status(500)
        .json(new Response(500, null, null, "unable to update product"));
    }

    return res
      .status(200)
      .json(new Response(200, "updated successfully", updateResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "update best selling product controller", null, error)
      );
  }
};

//
// delete best seeling product
const deleteBestProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteResult = await bestSellingModel.findByIdAndDelete(id);

    if (!deleteResult) {
      return res
        .status(500)
        .json(new Response(500, null, null, "unable to delete best product"));
    }

    return res
      .status(200)
      .json(new Response(200, "deleted successfully", deleteResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "delete best selling controller", null, error));
  }
};
module.exports = {
  createBestSelling,
  getAllBestProducts,
  getSingleBestProduct,
  updateBestProduct,
  deleteBestProduct
};
