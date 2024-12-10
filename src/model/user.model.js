const mongoose = require("mongoose");
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique: true,
        trim: true
    },
    phone:{
        type:String,
        required:true,
        trim:true,
        unique: true,
    },
    address1:{
        type:String,
        required:true,
        trim:true,
    },
    address2:{
        type:String,
        trim:true,
    },
    password: {
        type:String,
        required:true
    },
    isVeridied:{
        type:Boolean,
        default: false
    },
    role:{
        type:String,
        enum:["user","merchent","admin"],
        default: "user"
    },
    otp:{
        type: Number,
    },
    otpExpire:{
        type: Number,
    },
    image:{
        type:String
    }
},
{timestamps: true}
)

const usermodel = mongoose.model("user", userSchema);
module.exports = { usermodel };