// 防抖函数 —— 连续触发在最后一次执行方法，场景：输入框匹配
function debounce(fn, time) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            fn();
        }, time);
    }
}
// 节流函数 —— 在一定时间内只触发一次，场景：长列表滚动节流
function throttle(fn, time) {
    let isRuning = false;
    return function() {
        if(isRuning) {
            return;
        }
        isRuning = true;
        setTimeout(() => {
            fn();
            isRuning = false;
        }, time)
    }
}
// 测试代码
let fn = () => {
    console.log('fffffff')
}
setInterval(debounce(fn, 500), 1000) // 第一次在1500ms后触发，之后每1000ms触发一次
// setInterval(throttle(fn, 1000), 1500) // 开启定时器任务测试
