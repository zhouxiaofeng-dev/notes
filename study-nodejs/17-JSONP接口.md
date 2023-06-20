# 概念

浏览器端通过<script>标签的 src 属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做 JSONP。

# 特点：

1.JSONP 不属于真正的 AJAX 请求，因为他没有使用 XMLHttpRequest 这个对象
2.JSONP 仅支持 GET 请求，不支持 POST、PUT、DELETE 等请求
