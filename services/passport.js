const passport = require("passport");
const GoogleStratgey = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
// this basically tells passport users can use GoogleStrategy
// note: we had to verify the callback (callbackURL) with Google beforehand
passport.use(
  new GoogleStratgey(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(`accessToken: ${accessToken}`);
      console.log(`refreshToken: ${refreshToken}`);
      console.log("profile:", profile);
    }
  )
);
