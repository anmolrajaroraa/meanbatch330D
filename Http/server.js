const http = require("http");
http.createServer(takeRequestGiveResponse).listen(process.env.PORT || 1234,()=>{
    console.log("Server Start at 1234");
    callCache();
});
function callCache(){
    console.log("Collect Data from DB and Store in Array");
    // Collect Menu from DB and Store in Heap (Array)
}
function takeRequestGiveResponse(request, response){
    console.log("Request Rec ... ",request.url);
response.writeHead(200,{'content-type':'text/html'});
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