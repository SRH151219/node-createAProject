//引入第三方模块
const nodemailer = require("nodemailer");
//
function sendMail(mail, code,cb) {
    // 创建发送邮件的对象
    let transporter = nodemailer.createTransport({
        //node_modules/nodemailer/lib/well-known/services.json  查看相关的配置，如果使用qq邮箱，就查看qq邮箱的相关配置
        host: "smtp.qq.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            //发送者邮箱
            user: '2252281518@qq.com', // generated ethereal user
            //pass 不是邮箱账户的密码而是stmp的授权码（必须是相应邮箱的stmp授权码）
            //邮箱---设置--账户--POP3/SMTP服务 开启--成功开启POP3/SMTP服务,在第三方客户端登录时，密码框请输入以下授权码：
            pass: 'qjmtfzzsotlzecbf'
        }
    });

    // 邮件的相关信息
    let msg = {
        //发送者邮箱
        from: '2252281518@qq.com', // sender address
        //接收者邮箱，多个邮箱用逗号间隔
        //注意模板字符串的使用
        to: `${mail}`, // list of receivers
        //邮件标题
        subject: "邮箱验证",
        //文件内容，发送文件是text格式或者html格式，二者只能选择一个
        // text: "Hello world?", // plain text body
        //注意模板字符串的使用。
        html: "<h1>欢迎您使用邮箱验证</h1><p>您的验证码为：<b>" + `${code}` + "</b></p>"
    }

    // 发送邮件
    transporter.sendMail(msg, (err, res) => {
        //如果发送有误
        if(err){
            //如果发送有误，则会返回-1给调用的这个函数
            cb(-1)
        }else{
             //如果发送无误，则会返回1给调用的这个函数
            cb(1)
        }
    })
}
module.exports = {
    sendMail
};