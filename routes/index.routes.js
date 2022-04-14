var express = require('express')
const userController = require("../controllers/user.controller");
var router = express.Router()

/* GET login page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Orange Share'})
})

router.post('/home', userController.login)

/* GET logged user page */
router.get('/logged-user/:id', userController.findUserById)

/* GET home page */
// router.get('/home', function (req, res, next) {
//   res.render('main', {title: 'Orange Share | Home', page: 'home'})
// })

/* GET search page */
router.get('/search', function (req, res, next) {
  res.render('main', {title: 'Orange Share | Resultados', page: 'search'})
})


module.exports = router
