const jwt = require("jsonwebtoken");

//Authorization
const auth = (req, res, next) => {
  const authToken = req.headers["authorization"];
  const bearer = authToken.split(" ");
  const token = bearer[1];

  if (!token) return res.status(401).json({ message: "No token provided." });

  jwt.verify(token, process.env.SECRET_JWT, (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Failed to authenticate token." });
    }
    // if ok
    req.token = token;
    req.idLogged = data.id;
    //console.log(data);
    next();
  });
};

module.exports = auth;
