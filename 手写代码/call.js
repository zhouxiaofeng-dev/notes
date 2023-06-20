Function.prototype.myCall = function (context, ...args) {
    if (!context || context === null) {
        context = window;
    }
    let sym = Symbol();
    context[sym] = this; // 此时调用myCall方法的是context的sym属性(方法)
    const result = context[sym](...args); // 执行函数并返回结果 相当于把自身作为传入的context的方法进行调用了
    delete context[sym];   //删除该方法，不然会对传入对象造成污染（添加该方法）
    return result;
}
// 测试代码
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
var obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
};
greet.myCall(obj);
greet(obj);
