/**
 * 模块作用域：在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，这种模块级别的访问限制，叫做模块作用域
 * 
 * module对象：存储了和当前模块有关的信息
 * module.expors对象：将模块内的成员共享出去    require()导入自定义模块时就是导入这个对象
 * 默认情况下，Node提供的exports对象和module.exports指向同一个对象         最终指向的结果用module.epoxrts为准
 */


console.log(module);
console.log(module.exports == exports);    


exports.username = 'export';
exports.age = 22;
module.exports = {
    username: 'module',
    age : 23
}
