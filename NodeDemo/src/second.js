const fs = require("fs");
const path = require("path");
console.log(__dirname);
var rootPath = path.normalize(__dirname+"/..");
var fullPath = path.join(rootPath,"/assets/songs/E.mp3");
console.log("FullPath is ",fullPath);
console.log("Read........");
fullPath = "/Users/amit/Downloads/FetchAndPromise.mov";
//const readStream = fs.createReadStream(fullPath,{ highWaterMark: 128 * 1024 });
const readStream = fs.createReadStream(fullPath);
const writeStream = fs.createWriteStream("/Users/amit/Downloads/new.mov");
var counter = 0;
var startTime  = Date.now();
readStream.pipe(writeStream);
// readStream.on('data',(chunk)=>{
//     writeStream.write(chunk);
//     counter++;
//     console.log("Chunk is ",counter," " ,chunk);
// });
// readStream.on('end',()=>{
//     console.log("Stream End");
//     var endTime = Date.now();
//     console.log("Total Time Taken ",endTime-startTime);
// })


// fs.readFile(fullPath,(err,content)=>{
// if(err){
//     console.log("Can't Read this File....");
// }
// else{
//     console.log("Data Read Done....");
//     console.log(content);
// }
// });
console.log("Some Logic is Going On....");
//console.log(__filename);
