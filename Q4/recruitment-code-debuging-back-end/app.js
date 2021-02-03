const express = require("express");
const authService = require("./src/services/authService");
const AuthCallbackService = require("./src/services/authCallbackService");

const config = require("./src/config");

const app = express();

app.get("/", authService.redirectUri);
app.get("/oauth-github-callback", AuthCallbackService.callback);

app.listen(config.port, () => {
  console.log(`App listening on http://localhost:${config.port}`);
});