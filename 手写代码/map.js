Array.prototype.MyMap = function (fn) {
    if (typeof fn !== 'function') {
        throw new TypeError('fn must be a function');
    }
    let arr = [];
    for (let i = 0; i < this.length; i++){
        arr.push(fn(this[i], i, this));
    }
    return arr;
}

let newarr = [1, 2, 3].MyMap(item => item * 0.8);
console.log(newarr);
console.log(3*0.8);