const fs = require('fs');
fs.readFile('./成绩.txt','utf8', function (err, datastr) {
    if (err) return console.log("文件读取失败", err.message);
    // console.log(typeof datastr);
    const oldarr = datastr.split(' ');
    const newarr = []
    oldarr.forEach(item => {
        newarr.push(item.replace('=', ':'))
    })
    const finarr = newarr.join('\r\n');
    console.log(finarr);
    
    fs.writeFile('./成绩-ok.txt', finarr, function (err) {
        if (err) return console.log("文件读取成功");
    })
})