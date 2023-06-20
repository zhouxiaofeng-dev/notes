const test = require('./07-格式化时间(函数写法)');

const dt = new Date();
console.log(dt);
const newTime = test.dateFormat(dt);
console.log(newTime);

