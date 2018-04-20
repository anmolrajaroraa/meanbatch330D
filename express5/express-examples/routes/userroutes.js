const express = require("express");
const route = express.Router();
const winston = require("../utils/logger");

route.get('/sales',(req,res)=>{
    if(req.session.userid){
        res.send('Welcome to the Sales Page '+req.session.userid);
    }
    else{
      
        res.redirect("index.html");
        //res.send('First Login...');
    }
});

route.post('/register',(request, response)=>{

    var userid = request.body.userid;
    var pwd = request.body.pwd;
    winston.log('debug', 'Post Inside Register '+userid);
    const userCRUD = require("../db/usercrud");
    const User = require("../models/User");
    const userObject = new User(userid, pwd);
    userCRUD.addUser(userObject,response);
    // if(userid==pwd){
    //     let path  = require("path");
    //     let fullPath = path.normalize(__dirname+"/..");
    //     fullPath = path.join(fullPath,"/public/pages/welcome.html");
    //     //response.sendFile(fullPath);
    //     var menus =[{'name':'Login','link':'login.html'},{'name':'Register','link':'register.html'},{'name':'Sales','link':'sales.html'}];
    //     response.render('welcome',{"user":userid,'menus':menus});
    //     //response.send("U Register SuccessFully....");
    // }
    // else{
    //     response.send("Can't Register...");
    // }
    winston.log('debug', 'Inside POST Register Ends '+userid);
    });
    
    route.post('/login',(request,response)=>{
        winston.log('debug', 'Inside Login ');
        console.log("User ",request.query);
        var userid = request.body.userid;
        var pwd = request.body.pwd;
        const userCRUD = require("../db/usercrud");
    const User = require("../models/User");
    const userObject = new User(userid, pwd);
    userCRUD.find(userObject,request,response);

        // if(userid == pwd){
        //     response.send('Welcome '+userid);
        // }
        // else{
        //     response.send('Invalid userid or Password');
        // }
        //response.json({id:1001,name:'Ram'});
       // response.send('U Requested for Login ');
    
    });
    module.exports = route;






