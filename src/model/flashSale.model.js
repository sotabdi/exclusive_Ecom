const mongoose =require('mongoose')
const {Schema} = mongoose;

const flashSaleSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'product',
        require: true,
    }

})

const flashSaleModel = mongoose.model('flashSale' , flashSaleSchema)

module.exports = flashSaleModel