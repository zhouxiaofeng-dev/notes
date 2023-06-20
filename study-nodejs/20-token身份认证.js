const express = require('express');
const app = express();
const cors = require('cors');
const expressJWT = require('express-jwt');
const jwt = require('jsonwebtoken');

//定义secret密钥
const secretKey = 'zxfzxfzxf'

//解析urlencoded类型的数据
app.use(express.urlencoded({ extended: false }))

//解决跨域问题
app.use(cors())



//注册将JWT字符串解析还原成JSON对象的中间件
/**
 * expressJWT({secret: secretKey}) 就是用来解析Token的中间件
 * .unless  用来指定哪些接口不需要访问权限
 * 注意：只要配置成功了express-jwt这个中间件，就可以把解析出来的用户信息挂载到req.auth中
 */
app.use(expressJWT.expressjwt({ secret: secretKey,algorithms:["HS256"] }).unless({ path: [/\/api\//] }));

//登录接口
app.post('/api/login', (req, res) => {
    const userinfo = req.body
    if (req.body.username !== '123' || req.body.password !== '321') {
        return res.send({ status: 1, msg: '登录失败' });
    }
    /**
     * 调用jwt的sign方法生成JWT字符串，并通过token属性发送给客户端
     * 参数1：用户的信息对象，
     * 参数2：加密的密钥
     * 参数3：配置对象，可以配置当前token的有效期
     * 不要把密码加入到token字符串中
     */
    const tokenStr = jwt.sign({username:userinfo.username},secretKey,{expiresIn:'1h'})
    res.send({
        status: 200,
        message: '登录成功',
        token:tokenStr 
    })
})

//获取数据接口
app.get('/admin/getinfo', (req, res) => {
    console.log(req.auth);
    res.send({
        status: 200,
        message: '获取用户信息成功',
        data:req.auth
    })
})


//捕获解析JWT失败后产生的错误
app.use((err, req, res, next) => {
    //token解析失败导致的错误
    if (err.name === 'UnauthorizedError') return res.send({ status: 401, message: '无效的token' });
    //其他错误
    res.send({ status: 500, message: '未知的错误' });
})

app.listen(8888, function () {
    console.log('http://127.0.0.1:8888')
})