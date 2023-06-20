const express = require('express');

const app = express();


/**
 * 静态资源服务器
 * app.use(express.static('public'))
 * 可以访问public目录中的所有文件
 * http://locahost:3000/images/bg.jpg
 * http://locahost:3000/css/style.css
 * http://locahost:3000/js/login.js
 * 
 * 注意：是指定在public中查找文件，所以没有public路径
 * 
 * 托管多个静态资源目录
 * 先托管的同名文件先编译 所以同一个index.html是最前面的生效
 * 
 * 挂载路径前缀
 * app.use('/public',express.static('./files'));
 * 
 */
app.use(express.static('./files'));
app.use('/public',express.static('./files'))


app.get('/user', (req, res) => {
    res.send({ name: 'zs', age: 18, gender:'女'});
});


app.post('/user', (req, res) => { 
    res.send('Hello World!');
})

app.get('/', (req, res) => { 
    /**
     * 通过req.query可以获取到客户端发送来的查询参数  默认情况下是一个空对象
     */
    console.log(req.query);
    res.send(req.query);
})

app.get('/user/:id/:name', (req, res) => { 
    //req.params是动态匹配到的URL参数，默认是一个空对象
    console.log(req.params);
    res.send(req.params);
})

app.listen(80, () => {
  console.log('express server running at http://127.0.0.1');
});
 


