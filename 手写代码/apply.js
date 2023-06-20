Function.prototype.myApply = function (context, args = []) {
    if (!context || context === null) {
        context = window;
    }
    // 创造唯一的key值  作为我们构造的context内部方法名
    let sym = Symbol();
    context[sym] = this;
    // 执行函数并返回结果
    let result = context[sym](...args);
    delete context[sym];
    return result;
};
// 测试代码
function greet() {
    var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
    console.log(reply);
}
var obj = {
    animal: 'cats',
    sleepDuration: '12 and 16 hours'
};
greet.myApply(obj);
