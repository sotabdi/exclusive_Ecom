const { Response } = require("../utilities/apiResponse");
const {
  uploadToCloudinary,
  deleteCloudinary,
} = require("../utilities/cloudinary");
const categoryModel = require("../model/category.model");

const categoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { path } = req.files?.icon[0];

    if (!name || !path) {
      return res
        .status(400)
        .json(new Response(400, "Name and Icon required", null, null));
    }

    const { secure_url } = await uploadToCloudinary(path);

    const saveData = await new categoryModel({
      name,
      icon: secure_url,
    }).save();

    if (saveData) {
      return res
        .status(200)
        .json(
          new Response(200, "Catagory Created Successfully", saveData, null)
        );
    }
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `categoryController:${error}`, null, true));
  }
};

const getCategoryController = async (_, res) => {
  try {
    const allCategory = await categoryModel.find();
    if (!allCategory) {
      return res
        .status(500)
        .json(new Response(500, "category haven't listed yet", null, null));
    }

    return res
      .status(200)
      .json(new Response(200, "all catagory list", allCategory, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `getCategoryController:${error}`, error, null));
  }
};

const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const findResult = await categoryModel.findById(id);

    if (!findResult) {
      return res
        .status(400)
        .json(new Response(400, "cant find category"), null, null);
    }

    // set updated info to a new object
    let updatedObject = {};
    if (name) {
      updatedObject.name = name;
    }
    if (req.files?.icon) {
      const oldUrl = findResult?.icon.split("/");
      const oldImg = oldUrl[oldUrl?.length - 1].split(".").shift();

      // delete old img from cloudinary
      const deleteResult = await deleteCloudinary(oldImg);
      if (!deleteResult) {
        return res
          .status(500)
          .json(
            new Response(
              500,
              "unable to remove old image try again",
              null,
              null
            )
          );
      }

      // uploadin new img to cloudinary
      const { path } = req.files?.icon[0];
      const { secure_url } = await uploadToCloudinary(path);
      updatedObject.icon = secure_url;
    }

    if (Object.keys(updatedObject).length === 0) {
      return res
        .status(400)
        .json(new Response(400, "updated info needed", null, null));
    }

    findResult.set(updatedObject);
    const updatedResult = await findResult.save();

    if (updatedResult) {
      return res
        .status(200)
        .json(new Response(200, "Updated successfully", updatedResult, null));
    }
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, `updateCategoryController: ${error}`, null, null)
      );
  }
};
module.exports = {
  categoryController,
  getCategoryController,
  updateCategoryController,
};
