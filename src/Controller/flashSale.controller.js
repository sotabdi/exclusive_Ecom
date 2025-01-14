const flashSaleModel = require("../model/flashSale.model");
const { Response } = require("../utilities/apiResponse");

//
// create flash Sale product
const createFlashSale = async (req, res) => {
  try {
    const { name, product } = req.body;
    if (!name || !product) {
      return res
        .status(400)
        .json(new Response(400, null, null, "Name or Product Missing"));
    }

    const createFlashSale = await flashSaleModel.create({
      name,
      product,
    });
    if (!createFlashSale) {
      return res
        .status(500)
        .json(new Response(500, null, null, "failed to create flashSale"));
    }

    return res
      .status(200)
      .json(new Response(200, "created successfuully", createFlashSale, false));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, "create Flash Sale controller", null, error));
  }
};

//
// get all flashsaleProduct
const getAllFlashProduct = async (_, res) => {
  try {
    const findResult = await flashSaleModel.find().populate("product");
    if (!findResult.length) {
      return res.status(400).json(new Response(400, "notfoundany", null, null));
    }
    return res
      .status(200)
      .json(new Response(200, "Flash Sale", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "all flash sale product controller", null, error)
      );
  }
};

//
// get single flashsale product
const getSingleFlashProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await flashSaleModel.findById(id).populate("product");
    if (!findResult) {
      return res
        .status(400)
        .json(
          new Response(400, "reqested product is not available", null, false)
        );
    }
    return res
      .status(200)
      .json(new Response(200, "here you go", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "single flash sale product controller", null, error)
      );
  }
};

//
// update flashsale product
const updateFlashSaleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, product } = req.body;
    if (!name || !product) {
      return res
        .status(400)
        .json(new Response(400, null, null, "name is required"));
    }
    const findResult = await flashSaleModel.findByIdAndUpdate(
      { _id: id },
      { name: name, product: product },
      { new: true }
    );
    if (!findResult) {
      return res
        .status(500)
        .json(new Response(500, null, null, "unable to update"));
    }
    return res
      .status(200)
      .json(new Response(200, "updated successfully", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "update flash sale product controller", null, error)
      );
  }
};

//
// delete flashSale
const deleteFlashProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const findResult = await flashSaleModel.findByIdAndDelete(id);
    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, null, null, "can't find requested product"));
    }
    return res
      .status(200)
      .json(new Response(200, "deleted successfully", findResult, false));
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, "delete flash sale product controller", null, error)
      );
  }
};

module.exports = {
  createFlashSale,
  getAllFlashProduct,
  getSingleFlashProduct,
  updateFlashSaleProduct,
  deleteFlashProduct
};
