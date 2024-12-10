const mongoose = require("mongoose");

const dbConnection = async () =>{ 
    try {
        const databaseInstance = await mongoose.connect(process.env.DB_URL);
        if(databaseInstance){
            console.log('connected');
        }
    } catch (error) {
        console.log("error from dbconnection", error);
        
    }
}

module.exports = {dbConnection}