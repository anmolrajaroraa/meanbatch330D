const express = require("express");
const app = express();


const loadMiddleWares= require("./middlewares");
loadMiddleWares(app,express);
require("./error")(app);


console.log("Type of app ",typeof app);
app.listen(1234,()=>{
    console.log("Server Start....");
})
