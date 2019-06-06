//连接数据库
//引入mongoos插件
var mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/1906', {
    useNewUrlParser: true
});
// { useNewUrlParser: true }
//将连接的数据库赋给db
var db = mongoose.connection;
//监听
//连接失败
db.on('error', ()=>{
    console.log("连接失败")
});
//连接成功
db.once('open', function () {
    console.log("连接成功")
});

//导出数据库
module.exports = mongoose;
