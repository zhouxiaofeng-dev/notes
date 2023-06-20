// // import * as m1 from "./hello.js";  //静态 无论是否需要都会引入
//获取元素

const btn = document.getElementById('btn');

btn.onclick = function() {
    import ('./hello.js').then(module => {
        module.hello();
    })
}