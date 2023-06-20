const express = require('express');
const app = express();

//配置解析表单中的中间件
app.use(express.urlencoded({ extended: false }));

//必须在配置cors中间件之前，配置JSONP接口
app.get('/api/jsonp', (req, res) => {
    //定义JSONP接口具体实现过程
    //1.得到函数的名称
    const funcName = req.query.callback;
    //2.定义要发送到客户端的数据对象
    const data = { name: 'zxf', age: 18 }
    //3.拼接除一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    //4.将拼接好的字符串发送给客户端
    res.send(scriptStr);
})

//配置cors解决跨域问题
const cors = require('cors');
app.use(cors())

//引入路由模块
const router = require('./15-路由模块');
app.use('/api', router);


app.listen(80, function () {
    console.log("127.0.0.1");
})