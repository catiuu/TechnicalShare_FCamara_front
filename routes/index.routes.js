var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Orange Share'})
})

/* GET home page */
router.get('/home', function (req, res, next) {
  res.render('main', {title: 'Orange Share | Home', page: 'home'})
})

/* GET search page */
router.get('/search', function (req, res, next) {
  res.render('main', {title: 'Orange Share | Resultados', page: 'search'})
})

/* GET logged user page */
router.get('/logged-user', function (req, res, next) {
  res.render('main', {
    title: 'Orange Share | Seu Perfil',
    page: 'logged-user'
  })
})

module.exports = router
