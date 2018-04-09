const express = require("express");
const app = express();

app.use(express.static("public"));
app.get('/login',(request, response)=>{
response.json({id:1001,name:'Ram'});
   // response.send('U Requested for Login ');

})
console.log("Type of app ",typeof app);
app.listen(1234,()=>{
    console.log("Server Start....");
})
