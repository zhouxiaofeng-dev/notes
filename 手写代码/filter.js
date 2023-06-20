Array.prototype.MyFilter = function (fn) {
    if (typeof fn !== 'function') return;
    let res = []
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i])){
            res.push(this[i]);
        }
    }
    return res
}

console.log([1, 2, 3].MyFilter(item => item > 1));

