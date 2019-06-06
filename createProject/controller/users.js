//引入model层
const userModel = require("../model/users.js");
// console.log(userModel);

//进行业务逻辑操作

const Register = (req,res)=>{
    //接收数据
    // let {username,userpwd,age} = req.query;
    // console.log(req.query);

    let username = "ppppp";
    let userpwd = "2222";
    let age = 11;
    //将数据加入数据库中
    userModel.addUser({username,userpwd,age},(data)=>{
        res.json({data})
        // console.log(data);
    })
}
//调用
// Register();
//导出函数
module.exports = {
    Register
}
