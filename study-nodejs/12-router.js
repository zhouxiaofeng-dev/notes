/**
 * 路由模块
 * 
 * 为了方便对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块
 * 1.创建路由模块对应的.js文件
 * 2.调用express.Router()函数创建路由对象
 * 3.像路由对象上挂载具体的路由
 * 4.使用module.exports向外共享路由对象
 * 5.使用app.use()函数注册路由模块
 */

var express = require('express');      //1.导入express
var router = express.Router();                  //2.创建路由对象

//3.挂载具体的路由
router.get('/list', function(req, res) {
    res.send('Get user list');
});
    
router.post('/create', function (req, res) { 
    res.send('Post user LIST');
})

//4.向外到处路由对象
module.exports = router;
