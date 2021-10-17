var express = require('express');
var router = express.Router();
var db = require('../conf/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
    var data = req.body;
    var find = 'SELECT * FROM user WHERE name = "' + data.name + '"';
    db.query(find, function(error, result) {
        if (error) {
            res.send({ code: 403, message: '错误：' + err });
        } else {
            if (result.length > 0) {
                res.send({ code: 403, message: '账号已存在' });
            } else {
                var insert = 'INSERT INTO user (id,name,password,mobile) VALUES (?,?,?,?)';
                var inserInfo = [data.id, data.name, data.password, data.mobile];
                db.query(insert, inserInfo, function(err, results) {
                    if (err) {
                        res.send({ code: 403, message: '注册失败：' + err });
                    } else {
                        res.send({ code: 200, message: '注册成功' });
                    }
                });
            }
        }

    });

});

router.post('/login', function(req, res, next) {
    var data = req.body;
    var find = 'SELECT * FROM user WHERE name = "' + data.name + '" AND password = "' + data.password + '"';
    db.query(find, function(error, result) {
        if (error) {
            res.send({ code: 403, message: '错误：' + err });
        } else {
            if (result.length > 0) {
                res.send({ code: 200, message: '登录成功' });
            } else {
                res.send({ code: 403, message: '登录失败：昵称或密码不正确' });
            }
        }

    });

});

// 向模块外部导出数据 
module.exports = router;