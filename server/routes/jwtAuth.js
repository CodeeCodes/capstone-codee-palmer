const jwt = require("jsonwebtoken");
const tokenSecret = "cbdhcbbdchbueycbiureicl";

module.exports = function(req, res, next) {
  const checkToken = req.header("auth-token");
  if (!checkToken) return res.status(401).send("Access denied");

  try {
    const verified = jwt.verify(checkToken, tokenSecret);
    req.User = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};
