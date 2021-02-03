const config = require("../config");

function redirectUri(req, res) {
  const auth = `${config.oauthUrl}/authorize?client_id=${config.clientId}`;
  res.redirect(auth);
}
module.exports = { redirectUri };
