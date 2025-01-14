const mongoose = require('mongoose');
const {Schema} = mongoose

const productSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true
    },
    description:{
        type: String,
        requiried: true,
        trim: true,   
    },
    price:{
        type: Number,
        required: true,
        trim:true
    },
    colors:{
        type: String,
        required: true,
        trim: true
    },
    size:{
        type: String,
        default: ["S","M","L","XL"],
        enmu:["XS","S","M","L","XL","XXL"]
    },
    rating:{
        type: Number,
        trim: true,
        default: 0
    },
    reviews:[{
        rating:{
            type: String,
            trim: true
        },
        comment:{
            type: String,
            trim: true
        },
        date:{
            type: Date,
            default: Date.now
        },
        reviewerName: {
            type: String,
            trim: true
        }
    }],
    stock:{
        type: String,
        required: true,
        trim: true
    },
    discountPercentage:{
        type: Number,
        trim: true
    },
    category:{
        type: String,
        trim: true
    },
    images:[{
        type: String,
        required: true,
        trim: true
    }]
},{timestamps: true})

const productModel = mongoose.model('product', productSchema);

module.exports = productModel