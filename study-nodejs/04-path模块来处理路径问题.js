/**
 * path模块是Node.js官方提供的、用来处理路径的模块。它提供了一系列的方法和属性，用来满足用户对路径的处理需求
 * 例如
 * path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
 * path.basename()方法，用来从路径字符串中，将文件名解析出来
 * path.extname()方法，用来获取路径中的扩展名
 * 
 * 导入
 * const path = require('path');
 */
const fs = require('fs');
const path = require('path');


// ../是返回上一级目录 所以会把/c抵消掉
const newpath = path.join('/a', '/b/c', '../', '/d');
console.log(newpath);

// fs.readFile(path.join(__dirname, './files/2.txt'),'utf-8', function (err, dataStr) {
//     if (err) return console.log("文件读取失败", err.message);
//     console.log("文件读取成功！");
//     console.log(dataStr);
// })


const fpath = '/a/b/c/index.html';    //文件的存放路径


const filename = path.basename(fpath, '.html');    //index
// const filename = path.basename(fpath);   //index.html
console.log(filename);

const fext = path.extname(fpath);       //.html
console.log(fext);
