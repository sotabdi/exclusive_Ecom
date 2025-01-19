const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
    },
    subCategory: [
      {
        type: Schema.Types.ObjectId,
        ref: "subCategory",
      },
    ],
    product: [
      {
        type: Schema.Types.ObjectId,
        ref: "product",
      },
    ],
  },
  { timestamps: true }
);

const categoryModel = mongoose.model("category", userSchema);

module.exports = categoryModel;
