const express = require("express");
const route = express.Router();
const passport = require("passport");
const winston = require("../utils/logger");
//const passport = require("passport-google-oauth");
// const auth = require("../utils/googlepassport");
// auth(passport);
// app.use(passport.initialize());
route.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

// the callback after google has authenticated the user
route.get('/auth/google/callback',
        passport.authenticate('google', {
                successRedirect : '/sales',
                failureRedirect : '/'
        }));



// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

// if user is authenticated in the session, carry on
if (req.isAuthenticated())
    return next();

// if they aren't redirect them to the home page
res.redirect('/');
}



route.get('/sales',(req,res)=>{
    if(req.session.userid){
        res.send('Welcome to the Sales Page '+req.session.userid);
    }
    else{
      
        res.redirect("index.html");
        //res.send('First Login...');
    }
});
route.get('/getuserjson/:token',(req,res)=>{
console.log("Request is ",req.params.token);
var object = {id:req.params.token,name:'Ram'};
res.json(object);
})
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
       
        console.log("User ",request.query);
        var userid = request.body.userid;
        var pwd = request.body.pwd;
        winston.log('debug', 'Inside Login '+userid+' '+pwd);
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






