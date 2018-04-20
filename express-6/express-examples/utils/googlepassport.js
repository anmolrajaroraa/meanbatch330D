
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;





module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("Serialize the User ",user);
        done(null, user);
    });

    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        console.log("DeSerialize the User ",user);
        done(null,user);    
        // User.findById(id, function(err, user) {
        //     done(err, user);
        // });
    });

    passport.use(new GoogleStrategy({

        'clientID'      : '925664737047-oomltha0oq7upeqevafufbh9mdlrl6ur.apps.googleusercontent.com',
        'clientSecret'  : 'eauKB9o1_GuiqeRNrBRZsVG-',
        'callbackURL'   : 'http://localhost:1234/auth/google/callback'

    },
    (token,refeshtoken,profile,done)=>{
        return done(null,{profile:profile,token:token});
    }));
    

    

};