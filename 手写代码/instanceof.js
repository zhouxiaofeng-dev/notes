function Instanceof(left, right) {
    let leftVal = left.__proto__;
    let rightVal = right.prototype;
    while (leftVal !== null) {
        if (leftVal === rightVal) { 
            return true;
        }
        leftVal = leftVal.__proto__;
    }
    return false
}


console.log(Instanceof([1, 2, 3], Array));
console.log(Instanceof({}, Array));
console.log(Instanceof({}, Object));
console.log({} == []);