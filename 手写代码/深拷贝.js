function DeepClone(objData) {
    let result = Array.isArray(objData) ? [] : {};
    for (let i in objData) {
        if (objData.hasOwnProperty(i)) {
            result[i] = typeof objData[i] === "object" ? DeepClone(objData[i]) : objData[i];
        }
    }
    return result;
}

let obj = {
    a: 1,
    b: 2,
    c: {
        d:1,
        e: {
            f: 2,
            h: {
                j:1
            }
        }
    }
}

let arr = DeepClone(obj);
console.log(arr);