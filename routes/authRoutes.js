const passport = require("passport");

// whenever a user comes to this route, we kick them into our
// flow which is being managed by passport
// we're saying to passport, use google to authenticate
module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  // when the user successfully hits the callback endpoint, passport provides Google Strategy the code we need to trade Google for the scope: profile & email
  app.get("/auth/google/callback", passport.authenticate("google"));

  // scope arg tells google that we want profile and email from google
};
