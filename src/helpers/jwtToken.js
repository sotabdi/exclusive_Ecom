var jwt = require("jsonwebtoken");

const genarateToken = (payload) =>{
    try {
       const token = jwt.sign(
            payload,
            process.env.TOKEN_SECRET,
            { expiresIn: `${process.env.TOKEN_EXPIRY}` }
          );
          return token
    } catch (error) {
        console.log('jwt token error'+ error);
        
    }
}

module.exports = genarateToken
