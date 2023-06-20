/**
 * 中间件分类
 * 一、应用级别的中间件：绑定在app.use、app.get或app.post上的中间件
 * 
 * --------------------------------
 * 
 * 二、路由级别的中间件：绑定到express.Router()实例上的中间件
 * var app = express();
 * var router = express.Router();
 * router.use((req,res,next) => {
 *     next();
 * })
 * app.use('/',router)
 * 
 * --------------------------------
 * 
 * 三、错误级别的中间件：专门用来捕获整个项目中发生的异常错误，防止项目崩溃
 * 错误级别的中间件，必须注册在所有路由之后
 * app.use(function(err,req, res, next) {
 *      console.log('发生了错误' + err.message);
 *      res.send(err.message);
 * })
 * 
 * 四、Express内置的中间件
 * 1.express.static快速托管静态资源的内置中间件，例如：HTML文件、图片、CSS样式等（无兼容性）
 * 2.express.json解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
 *         在服务区，可以使用req.body属性来接收请求体数据
 *          默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
 *          app.use(express.json())通过这个来解析表单中的JSON格式的数据
 * 3.express.urlencoded解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中可用）
 * 
 * 
 * 五、第三方的中间件
 * 
 */




const express = require('express');
const app = express();

//通过这个来解析表单中的JSON格式的数据
app.use(express.json())

//通过这个来解析表单中url-encoded格式的数据
app.use(express.urlencoded({extended: false}))

//定义全局中间件
app.use((req, res, next) =>{ 
    console.log("这是一个最简单的中间件函数");
    //把轮转关系转交给下一个中间件或路由
    req.startTime = new Date();
    next();
});

// app.use((req, res, next) => {
//     console.log("这是第二个中间件");
//     next();
// })

// app.use((req, res, next) => {
//     console.log("这是第三个中间件");
//     next();
// })

const mv1 = (req, res, next) => { 
    console.log("这是第一个局部中间件");
    next();
}

const mv2 = (req, res, next) => { 
    console.log("这是第二个局部中间件");
    next();
}

//指定局部使用的中间件(不使用app.use生效的中间件，都叫局部中间件)
app.get('/', [mv1, mv2], (req, res) => {
    console.log(req.body);
    res.send('home page' + req.startTime);
    
})


app.get('/user', (req, res) => { 
    res.send('user page');
})

app.post('/book', (req, res) => { 
    console.log(req.body);
    res.send('ok')
})

app.listen(80, () => {
    console.log("http://127.0.0.1");
})


