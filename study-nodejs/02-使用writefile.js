const fs = require('fs');

/**
 * 参数1：文件路径的字符串
 * 参数2：表示要写入的内容
 * 参数3：可选参数，表示以什么内容写入  默认utf8
 * 参数4：文件写入后的回调函数
 */
fs.writeFile('./files/2.txt', 'Hello zxf', function (err) {
    console.log(err);
    //判断内容是否写入成功
    if (err) {
        return console.log('文件读取失败', err.message);
    }
    console.log('文件读取成功');
})