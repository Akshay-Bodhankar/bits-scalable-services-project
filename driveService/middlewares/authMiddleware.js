const jwt = require("jsonwebtoken");
const jwtConf = require("../config/jwt");

const isAuthenticated = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).send({
      status: "failed",
      message: "Unauthorized"
    });
  } else {
    const truncatedToken = token.split(" ")[1];
    jwt.verify(truncatedToken, jwtConf.secret, function (err, decoded) {
      console.log("Token details :", decoded);
      if (err) {
        res.status(401).send({
          status: "failed",
          message: "Unauthorized"
        });
      }
      else {
        req.body.userId = decoded.userId;
        next();
      }
    });
  }

};
module.exports = {
  isAuthenticated
};