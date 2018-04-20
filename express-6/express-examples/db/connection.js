const dbConfig = require("./config");
const mongoose = require("mongoose");
const winston = require("../utils/logger");
try{
const connection = mongoose.connect(dbConfig.url,{poolSize:20});
}
catch(e){
winston.log('error','Error Occur During Connection Creation'+e);
}
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.on('open', function() {
//  console.log("Connection Open....");
// });
module.exports = mongoose;