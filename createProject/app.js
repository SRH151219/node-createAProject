//引入第三方模块/核心模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入路由
// var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//创建express模板的实例
var app = express();

// view engine setup
//设置ejs静态资源目录
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//全局使用插件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//设置静态资源目录，里面的文件在同一局域网中都可以访问到，访问本地接口，不存在跨域
app.use(express.static(path.join(__dirname, 'public')));

//根据路径的不同，访问不同的路由
// app.use('/', indexRouter);
app.use('/users', usersRouter);

//自定义中间件-----捕获404并转发到错误处理程序
app.use(function(req, res, next) {
  next(createError(404));
});

// 自定义中间件----错误处理程序
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出
module.exports = app;
