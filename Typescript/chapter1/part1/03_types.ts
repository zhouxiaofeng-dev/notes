//也可以直接用字面量

let a: 10;
a = 10;

//可以使用 |  来连接多个类型
let b: 'male' | 'female';
b = 'male';
b = 'female'

let c: boolean | string;
c = true;
c = 'true'

//any表示任意类型  一个变量设置为any相当于对该变量关闭了TS的类型检测
//只声明不赋值，自动判断为any类型
let d: any;
d = true;
d = 'hello';
d = 13;

//unknown 表示位置类型
let e: unknown;
e = 10;
e = true;
e = 'true';

let s: string;
e = 'hello';
//e的类型为unknown不能赋值给string类型
//unknown就是一个类型安全的any
//unknown不能赋值给其他变量，但其他变量可以赋值给他
//s = e;

//类型断言,可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e;

// function fn(num) {
//     if (num > 0) {
//         return true;
//     } else {
//         return 123;
//     }
// }
//void 表示为空，函数就是没有返回值
function fn(): void{
}
//never表示永远不会返回结果
function fn2(): never{
    throw new Error('报错了')
}
export{}