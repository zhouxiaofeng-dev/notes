function flat1(arr) {
    if (!arr.length) return;
    return arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? [...pre, ...flat1(cur)] : [...pre, cur];
    },[])
}

const arr = [[1, [2, 3], [1, 2, [8]]], [[4, [1], [1], 4]]]
const newarrr = flat1(flat1(arr));

function flat2(arr) {
    if(!arr.length) return;
    let result = [];
    for(let i of arr) {
        if(!Array.isArray(i)) {
            result.push(i);
        } else {
            result = [...result, ...flat02(i)];
        }
    };
    return result; 
}


function flat3(arr) {
    if(!arr.length) return;
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    };
    return arr;
}