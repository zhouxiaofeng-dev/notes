import {h1} from './m'
function sum(a: number, b: number): number{
    return a + b;
}

var obj = { name: '孙悟空' ,age:33}
console.log(obj);
obj.age = 18
console.log(obj);


console.log(sum(123, 456));
console.log("haha");
console.log(h1);

let fn = (a: number, b: number): number => a + b;
fn(123, 456);
fn(77, 22);