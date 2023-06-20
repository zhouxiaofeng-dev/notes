//声明一个变量a，同时指定他的类型为number
var a;
//a的类型为number，说明他以后的值只能是number
a = 10;
a = 33;
var b;
b = 'hello';
//声明完变量直接赋值 TS会自动识别 就不需要类型限制
var c = true;
var d = false;
//JS中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(123, 456));   //579
// console.log(sum(123,"456"));  //123456
function sum(a, b) {
    return a + b;
}
var result = sum(123, 456);
//sum(123,"456")
