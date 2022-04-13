const checkUser = (req, res, next) => {
  if (req.idLogged != req.body.userId) {
    return res.status(403).json({ message: "Acesso negado!" });
  }
  next();
};

module.exports = checkUser;
