const { Response } = require("../utilities/apiResponse")

// 
// create Product
const createProduct = async (req,res)=>{
    try {
        
    } catch (error) {
        return res
      .status(500)
      .json(new Response(500, `product controller error`, null, error));
    }
}