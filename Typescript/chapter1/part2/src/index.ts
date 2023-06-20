export const hi = '你好'
//检查this
function fn2(this:Window) {
    alert(this)
}
//检查空值
let box1 = document.getElementById("box1");
box1?.addEventListener('click', function () {
    alert('hello')
})