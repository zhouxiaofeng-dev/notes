// Object.create()会将参数对象作为一个新创建的空对象的原型, 并返回这个空对象
// 1. 简单版
function myCreate(obj) {
    function CreateObj() {};
    CreateObj.prototype = obj;
    return new CreateObj();
}
// 2. 官方版
if (typeof Object.create !== "function") {
    Object.create = function (proto, propertiesObject) {
        if (typeof proto !== 'object' && typeof proto !== 'function') {
            throw new TypeError('Object prototype may only be an Object: ' + proto);
        } else if (proto === null) {
            throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
        }

        if (typeof propertiesObject !== 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

        function F() {}
        F.prototype = proto;

        return new F();
    };
}
// 测试代码
let a = {
    name: 'jack',
    age: 12
};
let b = myCreate(a);
console.log(b);    // {}
console.log(b.name)   // "jack"
