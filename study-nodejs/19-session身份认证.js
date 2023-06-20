const express = require('express');
const app = express();

app.use(express.urlencoded({extended: false}))
//配置session中间件
const session = require('express-session');
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true
}));

app.post('/api/login', (req, res) => {
    if (req.body.username !== '123' || req.body.password !== '321') {
        return res.send({ status: 1, msg: '登录失败' });
    }
    req.session.user = req.body;    //将用户的信息保存到session中
    req.session.islogin = true;      //将用户的登录状态保存到session中
    res.send({ status: 0, msg: '登录成功' });
})


app.get('/api/getUsername', (req, res) => {
    if (!req.session.islogin) { return res.send({ status: 1, msg: '登录失败' }); }
    return res.send({
        status: 0,
        msg: 'success',
        data:req.session.user.username
    })
})

app.post('api/logout', (req, res) => {
    req.session.destroy()
    res.send({
        status: 0,
        msg: '退出成功'
    })
})


app.listen(80, function () {
    console.log('服务器启动成功');
})