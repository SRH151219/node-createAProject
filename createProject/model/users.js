//引入数据库---此时db相当于引入的mongoose
const db = require("../db/db.js");

//创建schema对象(相当于表头),该对象里包含了数据表里的字段
let userSchema = db.Schema({
    user:String,
    pwd:String,
    age:Number,
})

//将schema对象转为数据模型
let userModule = db.model('users',userSchema);

//增
// userModule.insertMany([{user:"大笨猪",pwd:"123",age:12}]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err)
// })
//封装 增 函数
const addUser = (userInfo,cb)=>{
    console.log(userInfo);
    userModule.insertMany([{user:userInfo.username,pwd:userInfo.userpwd,age:userInfo.userage}]).then((data)=>{
        cb(data)
    })
}
//调用增 函数
// addUser({username:"咪咪",userpwd:"234",age:33});
//导出函数
module.exports = {
    addUser
}
