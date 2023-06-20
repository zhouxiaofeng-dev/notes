Array.prototype.MyEvery = function (fn) {
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function");
    }
    let res = [];
    for (let i = 0; i < this.length; i++){
        if (!fn(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

console.log([1, 2, 3, 4].MyEvery(item => item > 0));
console.log([1, 2, 3, 4].every(item => item > 0));
