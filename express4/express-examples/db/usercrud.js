const User = require("./userschema");
const UserOperations = {
    addUser(userObject,response){
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
        User.find(userObject,(error, docs)=>{
              if(error){
                    response.send("Some Error in DB");
              }  
              else{
                  if(docs && docs.length>0){
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