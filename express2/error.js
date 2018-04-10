function error(app){
    app.use((request,response,next)=>{
       // response.writeHead({status:404})
        response.send("U Type Something Wrong URL , Please ReCheck....");
        next();
        })
}
module.exports = error;