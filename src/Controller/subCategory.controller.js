const subCategoryModel = require("../model/subCategory.model");
const { Response } = require("../utilities/apiResponse");
const { uploadToCloudinary, deleteCloudinary } = require("../utilities/cloudinary");

//
// create new subcategory
const createSubCategory = async (req, res) => {
  try {
    const { name, category } = req.body;
    const { path } = req.files?.icon[0];

    if (!name || !category || !path) {
      return res
        .status(400)
        .json(
          new Response(400, "category name and parent id requried", null, null)
        );
    }

    const isalreadyExist = await subCategoryModel.findOne({ name: name });

    if (isalreadyExist) {
      return res
        .status(400)
        .json(
          new Response(400, "category name already exist", isalreadyExist, null)
        );
    }
    const { secure_url } = await uploadToCloudinary(path);

    const createdsub = await new subCategoryModel({
      name,
      icon: secure_url,
      category,
    }).save();

    if (!createdsub) {
      return res
        .status(400)
        .json(new Response(400, "Failed to create subCategory", null, null));
    }

    return res
      .status(200)
      .json(
        new Response(200, "subcategory created successfully", createdsub, null)
      );
  } catch (error) {
    return res
      .status(500)
      .json(
        new Response(500, `createsubcategoryController:${error}`, null, true)
      );
  }
};

//
// get all sub category
const getAllSubCategory = async (req, res) => {
  try {
    const allSubCategory = await subCategoryModel.find().populate("category");

    if (!allSubCategory.length) {
      return res
        .status(400)
        .json(new Response(400, "no subcategory available", null, null));
    }

    return res
      .status(200)
      .json(new Response(200, "All sub category", allSubCategory, null, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `getallSubcategory:${error}`, null, null));
  }
};

//
// get Single subcategory
const getSingleSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const findSubResult = await subCategoryModel
      .findById(id)
      .populate("category");

    if (!findSubResult) {
      return res
        .status(400)
        .json(new Response(400, "requested subcategory missing", null, null));
    }

    return res
      .status(200)
      .json(new Response(200, "here you go", findSubResult, null));
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `getsingleSubcategory:${error}`, null, null));
  }
};

//
// update sub category
const updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category } = req.body;
  
    const findresult = await subCategoryModel.findById(id).populate("category");
    if (!findresult) {
      return res
        .status(400)
        .json(new Response(400, "can not find any subcategory", null, null));
    }

    let updatedOject = {};
    if(name){
      updatedOject.name = name
    }
    if(category){
      updatedOject.category = category
    }

    if(req.files?.icon){
      const oldImage = findresult.icon.split('/');
      const imgId = oldImage[oldImage?.length-1].split('.').shift();

      const deleteResult = await deleteCloudinary(imgId);
      const { path } = req.files?.icon[0];

      const {secure_url} = await uploadToCloudinary(path);

      updatedOject.icon = secure_url;
    }

    if (Object.keys(updatedOject).length === 0) {
      return res
        .status(400)
        .json(new Response(400, "updated info needed", null, null));
    }
    
    const updatedResult = await findresult.set(updatedOject).save()

    if(!updatedResult){
      return res
        .status(500)
        .json(new Response(500, "Failed to update subcategory", null, null));
    }

    return res
        .status(200)
        .json(new Response(200, "updated sub successfully", updatedResult, null));
    
  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `getallSubcategory:${error}`, null, null));
  }
};

// 
// deleta subcategory
const deleteSubCategory = async (req,res)=>{
  try {
    const {id}=req.params
    const deleteResult = await subCategoryModel.findByIdAndDelete(id);

    if(!deleteResult){
      return res
      .status(400)
      .json(new Response(400, `unable to delete requested id`, null, null));
    }

    // delete image from cloudinary
    const { icon } = deleteResult;
    const iconUrl = icon?.split("/");
    const iconId = iconUrl[iconUrl?.length - 1].split(".").shift();

    await deleteCloudinary(iconId);

    return res
      .status(200)
      .json(new Response(200, `delete sub category successfully`, deleteResult, null));

  } catch (error) {
    return res
      .status(500)
      .json(new Response(500, `delete subcategory:${error}`, null, null));
  }
}
module.exports = { createSubCategory, getAllSubCategory, getSingleSubCategory, updateSubCategory,deleteSubCategory };
