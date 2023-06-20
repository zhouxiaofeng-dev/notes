Array.prototype.myReduce = function (fn, initValue) {
    if (Object.prototype.toString.call(fn) !== '[object Function]') {
        throw new Error('第一个参数必须为函数!');
    }
    //第二个参数是可选的
    let pre = null;
    if (arguments.length > 1) {
        //当参数不止一个时，pre = initValue(初始值)
        pre = initValue
    } else {
        //当参数只有一个时，pre = 数组的第一个值
        pre = this[0];
    }
    //迭代fn方法
    for (let i = 0; i < this.length; i++) {
        pre = fn(pre, this[i], i, this);
    }
    return pre
}

let arr = [1, 2, 3];

let a = arr.myReduce((pre, cur) => {
    return pre + cur;
}, 0);
console.log(a);