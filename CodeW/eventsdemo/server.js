const http = require("http");
http.createServer(takeRequestGiveResponse).listen(process.env.PORT || 1234,()=>{
    console.log("Server Start at 1234");
    callCache();
});
function callCache(){
    console.log("Collect Data from DB and Store in Array");
    // Collect Menu from DB and Store in Heap (Array)
}
function isStatic(url){
    const staticArr=[".mp3",".html",".css",".js",".jpeg",".jpg",".png"];
    console.log('Url is ',url);
    const path = require("path");
    
    var ext = path.extname(url);
    console.log("ext is ",ext);
    return staticArr.indexOf(ext)>=0;
}
function takeRequestGiveResponse(request, response){
    console.log("Request Rec ... ",request.url);
response.writeHead(200,{'content-type':'text/html'});
const url = require("url");
var object = url.parse(request.url);
console.log("URL Object is ",object);
if(isStatic(request.url)){
     const path = require("path");
     const fs = require("fs");
     const fullPath = path.join(__dirname,"public"+request.url);
     console.log("FULL PATH IS ..... "+fullPath);
     console.log("Exist "+fs.existsSync(fullPath)+" PATH "+fullPath);
     //const fileStream = fs.createReadStream(fullPath);
    //fileStream.pipe(response);
    fs.readFile(fullPath,{encoding: 'utf-8'},(err,content)=>{
        if(err){
            response.write("Invalid Path");
        }
        else{
        response.write(content);
        response.end();
        }
    });

}
// if(request.url =='/index.html'){
//     const path = require("path");
//     const fs = require("fs");
//     const fullPath = path.join(__dirname,"public/index.html");
//     console.log("Full Path is ",fullPath);
//     const fileStream = fs.createReadStream(fullPath);
//     fileStream.pipe(response);
// }
else
if(request.method=='POST' && request.url =='/login'){
var mydata='' ;
    request.on('data',(chunk)=>{
        mydata+=chunk;
})
request.on('end',()=>{
    const qs = require("querystring");
    console.log("My data is ",mydata);
    var obj = qs.parse(mydata);
    console.log("DATA FOR POST ",obj);
    if(obj.userid == obj.pwd){
        response.write("Welcome "+obj.userid);
    }
    else{
        response.write("Invalid Userid or Password");
    }
    response.end();

});

}
else
if(request.method =='GET' && object.pathname =='/login'){
    console.log("Request ::: ",object.query);
    const qs = require("querystring");
    var obj = qs.parse(object.query);
    console.log("Obj :::: ",obj.userid + " "+obj.pwd );
    if(obj.userid == obj.pwd){
        response.write("Welcome "+obj.userid);
    }
    else{
        response.write("Invalid Userid or Password");
    }
    response.end();
}
else
if(request.url=='/welcome'){
    response.write('Welcome User');
response.end();
}
else
if(request.url=='/home'){
    response.write('<h1>Welcome to Home Page</h1>');
    response.end();
}
else
if(request.url=='/'){
     response.write('<h1>Default Page</h1>');
    response.end();
}
else{
response.write('Invalid Request');
response.end();
}

}