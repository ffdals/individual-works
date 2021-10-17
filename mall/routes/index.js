var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/index', function(req, res, next) {
    res.render('index.html', { title: 'index' });
});
router.get('/login', function(req, res, next) {
    res.render('login.html', { title: 'login' });
});

router.get('/register', function(req, res, next) {
    res.render('register.html', { title: 'register' });
});

router.get('/shopcar', function(req, res, next) {
    res.render('shopcar.html', { title: 'shopcar' });
});


module.exports = router;