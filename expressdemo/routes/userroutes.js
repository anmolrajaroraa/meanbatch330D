const express = require("express");
const route = express.Router();
route.post('/register',(request, response)=>{
    var userid = request.body.userid;
    var pwd = request.body.pwd;
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
    });
    
    route.post('/login',(request, response)=>{
        console.log("User ",request.query);
        var userid = request.body.userid;
        var pwd = request.body.pwd;
        const userCRUD = require("../db/usercrud");
    const User = require("../models/User");
    const userObject = new User(userid, pwd);
    userCRUD.find(userObject,response);

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






