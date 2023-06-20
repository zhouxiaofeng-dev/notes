const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    //通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    //调用res.send方法，向客户端响应处理的结果
    res.send({
        status: 0,   //0表示处理成功，1表示处理失败
        msg: 'GET请求成功!',   
        data: query
    });
});

router.post('/post', (req, res) => {
    //通过req.body 获取请求体中包含的url-encoded格式的数据
    const body = req.body;
    //调用res.send方法，向客户端响应处理的结果
    res.send({
        status: 0,   //0表示处理成功，1表示处理失败
        msg: 'POST请求成功!',   
        data: body
    });
});

router.delete('/delete', (req, res) => { 
    res.send({
        status: 0,   //0表示处理成功，1表示处理失败,
        msg: 'DELETE请求成功!',
    })
})

module.exports = router