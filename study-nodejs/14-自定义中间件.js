/**
 * 手动模拟一个类似于express.urlencoded这样的中间件，来解析POST提交到服务器的表单数据
 * 1.定义中间件
 * 2.监听req的data事件
 * 3.监听req的end事件
 * 4.使用querystring模块解析请求体数据
 * 5.将解析出来的数据对象挂载为req.body
 * 6.将自定义中间件封装为模块
 */
const qs = require('querystring');

const bodyParser = (req, res, next) =>{
    //1.定义一个str字符串，专门用来存储客户端发送过来的请求体数据
    let str = '';

    //2.监听req的data事件
    req.on('data', function (chunk) {
        //拼接获取到的新数据
        str += chunk;
    })

    //3.监听req的end事件
    req.on('end',  ()=> {
        // console.log(str);
        req.body = qs.parse(str);
        next();
    })
}

module.exports = bodyParser;