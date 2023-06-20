/**
 * 当我们使用node时，有时候js里面些的路径是相对路径 而在不同文件夹内编译时会导致路径错误
 * 解决方法：使用绝对路径     但是不利于维护
 *           __dirname表示当前文件夹所处的目录  
 *
 */


const fs = require('fs');
fs.readFile(__dirname + './files/1.txt', function (err, dataStr) {
    if (err) return console.log("文件读取失败", err.message);
    console.log("文件读取成功");
})