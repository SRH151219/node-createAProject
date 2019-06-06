//引入controller层
const userController = require("../controller/users.js");

var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

//根据路由的不同，使用不同的业务逻辑处理
router.get("/register",userController.Register);

module.exports = router;
