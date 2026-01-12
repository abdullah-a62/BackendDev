const passport=require('passport');
var GoogleStrategy=require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID:"SECRET_ID",
    clientSecret:"SECRET_KEY",
    callbackURL:"http://localhost:3000/auth/google/callback"
},
function(accessToken,refreshToken,profile,cb){
    return cb(null,user);
})
)
passport.serializeUser(function(user,done){
    done(null,user)
});
passport.deserializeUser(function(user,done){
    done(null,user)
});