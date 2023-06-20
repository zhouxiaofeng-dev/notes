//声明一个变量a，同时指定他的类型为number
let a: number;
//a的类型为number，说明他以后的值只能是number
a = 10;
a = 33;

let b:string;
b = 'hello';

//声明完变量直接赋值 TS会自动识别 就不需要类型限制
let c: boolean = true;
let d = false;

//JS中的函数是不考虑参数的类型和个数的
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(123, 456));   //579
// console.log(sum(123,"456"));  //123456


 function sum(a:number, b:number):number {
     return a + b;
}
let result = sum(123, 456)
//sum(123,"456")

export{}