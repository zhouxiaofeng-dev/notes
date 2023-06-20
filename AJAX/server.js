
    //1.引入express
const { request, response } = require('express');
const express = require('express');

//2.创建应用对象
const app = express();

//3.创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    
     //设置响应
    response.send('HELLO AJAX -2');
});
app.post('/server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
     //设置响应
    response.send('HELLO POST');
});
//all 可以接收任何类型的请求
app.all('/server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
     //设置响应
    response.send('HELLO POST');
});
app.all('/json-server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
    //响应数据
    const data = {
        name: 'zxf'
    };
    //对对象进行字符串的转换
    let str = JSON.stringify(data);
     //设置响应
    response.send(str);
});
//专门针对IE缓存问题：因为IE有缓存数据的功能，所以使得新数据无法第一时间呈现
//解决方法：增加时间磋
app.get('/ie', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    
     //设置响应
    response.send('HELLO IE-4');
});
//用于请求超时和网络异常
app.get('/delay', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 延时响应
    setTimeout(()=> {
        //设置响应
        response.send('延时响应');
    }, 3000);
    
});
//jquery服务
app.all('/jQuery-server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应
    const data = {name:'尚硅谷',}
    // response.send('hello Jquery AJAX');
    response.send(JSON.stringify(data));
    
});
//axios服务
app.all('/axios-server', (request, response) => {
    //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应
    const data = {name:'尚硅谷',}
    // response.send('hello Jquery AJAX');
    response.send(JSON.stringify(data));
    
});
//fetch服务
app.all('/fetch-server', (request, response) => {
     //设置响应头   设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头  设置全部头信息可用
    response.setHeader("Access-Control-Allow-Headers", "*");
    //设置响应
    const data = {name:'尚硅谷',}
    // response.send('hello Jquery AJAX');
    response.send(JSON.stringify(data));
    
});

app.all('/data', (request, response) => {
     //设置响应头   设置允许跨域  //若没有这一句 则报错
    response.setHeader('Access-Control-Allow-Origin', '*');
    const data = {
       name: 'zxf'
    };
    let str = JSON.stringify(data);
    //end不会加特殊响应头
    response.send(data);
});
//JSONP服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("jsonp hello")');
    const data = {
       name: 'zxf'
    };
    let str = JSON.stringify(data);
    //end不会加特殊响应头
    response.end(`handleData(${str})`);
});
//用户名检测是否存在
app.all('/check-username', (request, response) => {
    const data = {
        exist: 1,
        msg:'用户名已经存在'
    };
    let str = JSON.stringify(data);
    //end不会加特殊响应头
    response.end(`handle(${str})`);
});
//jQuery 发送JSONP请求
app.all('/jQuery-jsonp-server', (request, response) => {
    const data = {
        name: 'zxf',
        city: ['北京','上海','广东']
    };
    let str = JSON.stringify(data);
    //接收callback参数
    let cb = request.query.callback;

    //end不会加特殊响应头
    response.end(`${cb}(${str})`);
});
//CORS
app.all('/cors-server', (request, response) => {
    //CORS的方法  加上设置 
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader("Access-Control-Allow-Headers", "*");
    response.setHeader("Access-Control-Allow-Method", "*");
    response.send("hello CORS");
});

//4.监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动，8000端口监听中....");
})