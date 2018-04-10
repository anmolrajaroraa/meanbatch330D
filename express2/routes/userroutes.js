const express = require("express");
const route = express.Router();
route.post('/register',(request, response)=>{
    var userid = request.body.userid;
    var pwd = request.body.pwd;
    if(userid==pwd){
        response.send("U Register SuccessFully....");
    }
    else{
        response.send("Can't Register...");
    }
    });
    
    route.get('/login',(request, response)=>{
        console.log("User ",request.query);
        var userid = request.query.userid;
        var pwd = request.query.pwd;
        if(userid == pwd){
            response.send('Welcome '+userid);
        }
        else{
            response.send('Invalid userid or Password');
        }
        //response.json({id:1001,name:'Ram'});
       // response.send('U Requested for Login ');
    
    });
    module.exports = route;






