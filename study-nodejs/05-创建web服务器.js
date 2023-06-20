/**
 * 1.导入http模块
 * 2.创建web服务器实例
 * 3.为服务器实例绑定request事件，监听客户端的请求
 * 4.启动服务器 调用listen方法
 */

const http = require('http');
const server = http.createServer();


/**
 * req.url是客户端请求的URL地址
 * req.method是客户端请求的method类型
 * 
 */
server.on('request', (req, res) => {
    const url = req.url;
    const method = req.method;
    const str = `请求地址是${url},请求类型为${method}`; 

    //解决中文乱码问题
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    res.end(str);
});

server.listen(80, () => {
    console.log('http server running at http://127.0.0.1');
});