var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.post("/login", userController.login);
router.patch("/update", userController.updateProfile);
router.post("/addskill", userController.addSkill);
router.post("/search", userController.findUsers);
router.post("/removeskill", userController.removeSkill);
router.post("/id", userController.findUserById);

module.exports = router;
