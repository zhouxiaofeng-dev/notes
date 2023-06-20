Function.prototype.myBind = function(context, ...args) {
    const self = this;
    args = args ? args : [];
    return function() {
        let newArgs = [...arguments];
        return self.apply(context, args.concat(newArgs));
    }
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
greet.myBind(obj)();


//bind没有直接执行方法，而是返回一个函数