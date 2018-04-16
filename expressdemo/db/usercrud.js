const User = require("./userschema");
const passwordHash = require("password-hash");
const UserOperations = {
    addUser(userObject,response){
        var hashedPassword = passwordHash.generate('password123');
        User.create(userObject,(error)=>{
            if(error){
                response.send("Something Wrong in DB",error);    
            }
            else{
                response.send("U Register SuccessFully....");    
            }
        });
    },
    find(userObject,response){
        var obj = {"userid":userObject.userid};
        User.find(obj,(error, docs)=>{
              if(error){
                    response.send("Some Error in DB");
              }  
              else{
                  if(docs && docs.length>0){
                      var dbPassword = docs[0].pwd;
                      var reqPassword = userObject.pwd;
                      bcrypt.compare(reqPassword, dbPassword, function(err, res) {
                        if(res) {
                         // Passwords match
                        } else {
                         // Passwords don't match
                        } 
                      });
                      
                    var menus =[{'name':'Login','link':'login.html'},{'name':'Register','link':'register.html'},{'name':'Sales','link':'sales.html'}];
                        response.render('welcome',{"user":docs[0].userid,'menus':menus});
                  }
                  else{
                      response.send("Invalid userid or Password");
                  }
              }
        })
    }

}
module.exports = UserOperations;