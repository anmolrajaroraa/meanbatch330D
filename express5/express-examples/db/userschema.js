
const mongoose = require("./connection");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    "userid":String,"pwd":String
});
var User = mongoose.model("users",userSchema);
module.exports = User;