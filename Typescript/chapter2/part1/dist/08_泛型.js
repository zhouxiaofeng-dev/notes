"use strict";
// function fn(a: number):number {
//     return a
// }
/**
 * 在定义函数的时候，如果遇到类型不明确就可以使用泛型
 *
 */
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result = fn(10); //不指定泛型  Ts可以自动对类型进行推断
let result2 = fn('hello'); //指定泛型
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'aaa');
function fn3(a) {
    return a.length;
}
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('bbb');
