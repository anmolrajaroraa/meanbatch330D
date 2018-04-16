const dbConfig = require("./config");
const mongoose = require("mongoose");
const connection = mongoose.connect(dbConfig.url,{poolSize:20});
// connection.on('error', console.error.bind(console, 'connection error:'));
// connection.on('open', function() {
//  console.log("Connection Open....");
// });
module.exports = mongoose;