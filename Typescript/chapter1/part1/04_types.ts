//object表示一个js对象
let a: object;
a = {};
a = function(){}

//{}用来指定对象中可以包含哪些属性
//语法：{属性名：属性值，属性名：属性值}
//在属性名后面加上一个？ 表示属性是可选的
let b: { name: string,age?:number };
b = { name: '孙悟空' }

//[propsName:string]:any  表示任意类型的属性
let c: { name: string,[propsName:string]:any }
c = { name: '猪八戒', a: 1, b: 2 };

let d: (a: number, b: number) => number;
d = function (n1, n2) {
    return n1 + n2;
}

let e: string[];
e = ['e', 'b', 'c'];

//number[] 表示数值数组
let f: number[]

let g: Array<number>;
g = [1, 2, 3];

//元组：固定长度的数组
let h: [string, string];
h = ['a', 'b'];


//enum 枚举
enum Gender{
    Male = 0,
    Female = 1,
}
let i: { name: string, gender: Gender };
i = {
    name: 'zzz',
    gender:Gender.Male
}
// console.log(i.gender === Gender.Male);
//&表示同时
 let j: { name: string } & { age: number };

//类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;


export{}