const mongoose = require("mongoose");

const { Schema } = mongoose;

const subCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    trim: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "category",
    required: true
  },
  product: [{
    type: Schema.Types.ObjectId,
    ref: "product",
  }],
},{timestamps:true});

const subCategoryModel =mongoose.model('subCategory', subCategorySchema)

module.exports = subCategoryModel;
