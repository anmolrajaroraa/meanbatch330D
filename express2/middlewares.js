const bodyParser = require("body-parser");
const userRoutes = require("./routes/userroutes");
function loadMiddleWares(app,express){
app.use(express.static("public")); // Middleware come with express
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",userRoutes);

}
module.exports = loadMiddleWares;