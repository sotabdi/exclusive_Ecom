require('dotenv').config()
const {dbConnection} = require("./src/Database/index");
const {app} = require("./app")


dbConnection().then(()=>{
    app.listen(process.env.PORT||5000, ()=>{
        console.log('runnig on port 3000');
    })
}).catch((err)=>{
    console.log("index",err);
    
})

