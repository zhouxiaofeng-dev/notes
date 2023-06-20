//函数柯里化  ------  将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术
/**
 * 函数柯里化的应用场景
 * 1.参数复用
 * 2.延时执行
 * 3.提前确认
 */

function curry(fn) {
    if(fn.length <= 1) return fn;  // 确定传入的函数的参数的个数
    const result = (...args) => {
        console.log(...args);
        if(fn.length === args.length) {
            return fn(...args);
        } else {
            return (...argsNew) => {   // 递归取参数，然后在合并参数，一直到取到的参数数量和 fn 参数数量相等
                return result(...args, ...argsNew);
            }

        }
    }
    return result;
}

let arr = (a, b, c, d) => {return a + b + c + d};
const result = curry(arr);
// console.log(arr(1, 2, 3, 4));
console.log(result(1)(2)(3)(4));

