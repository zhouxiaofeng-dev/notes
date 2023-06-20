//导入fs模块
const fs = require('fs');

//调用fs的readfile来读取文件
/**
 * 参数1：文件的路径
 * 参数2：读取的编码格式u
 * 参数3：回调函数， 拿到读取成功和失败的结果  err datastr
*/
fs.readFile('./files/1.txt', 'utf8', function (err, datastr) {
    //读取成功，err == null
    console.log(err);
    console.log("---------------");
    console.log(datastr);

    //判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败', err.message);
    }
    console.log('文件读取成功',datastr);
});



