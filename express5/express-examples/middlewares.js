const bodyParser = require("body-parser");
const userRoutes = require("./routes/userroutes");
const session = require("express-session");
const morgan = require("morgan");
const fs = require("fs");
function loadMiddleWares(app,express){
    var morganLogPath = "/Users/amit/Documents/logs/server.log";
    var morganLogStream = fs.createWriteStream(morganLogPath);
    app.use(morgan('combined', {stream: morganLogStream}));
    //combined ----  Standard Apache combined log output.

app.use(express.static("public")); 
// Middleware come with express
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/",userRoutes);
//app.use("/admin",adminRoutes);
app.use("/",userRoutes);
app.use("/",userRoutes);
app.set('view engine', 'ejs');
//app.set('views','/templates');

}
module.exports = loadMiddleWares;