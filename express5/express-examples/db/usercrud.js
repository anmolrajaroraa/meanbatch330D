const User = require("./userschema");
const passwordHash = require("password-hash");
const UserOperations = {
    addUser(userObject,response){
        userObject.pwd = passwordHash.generate(userObject.pwd);
        User.create(userObject,(error)=>{
            if(error){
                response.send("Something Wrong in DB",error);    
            }
            else{
                response.send("U Register SuccessFully....");  
                const configMail = require("../utils/mail");  
                configMail(userObject.userid);
            }
        });
    },
    find(userObject,req, response){
        var obj = {"userid":userObject.userid};
        User.find(obj,(error, docs)=>{
              if(error){
                    response.send("Some Error in DB");
              }  
              else{
                  if(docs && docs.length>0){
                      var dbPassword = docs[0].pwd;
                      var reqPassword = userObject.pwd;
                      var result = passwordHash.verify(reqPassword, dbPassword);
                      //bcrypt.compare(reqPassword, dbPassword, function(err, res) {
                        if(result) {
                            req.session.userid = docs[0].userid;
                            var menus =[{'name':'Login','link':'login.html'},{'name':'Register','link':'register.html'},{'name':'Sales','link':'sales'}];
                            response.render('welcome',{"user":req.session.userid,'menus':menus});
                         // Passwords match
                        } else {
                            response.send("Invalid userid or Password");
                         // Passwords don't match
                        } 
                      };
                      
                   
                  }
                 
              });
        }
    }


module.exports = UserOperations;