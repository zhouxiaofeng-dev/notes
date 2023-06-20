//1.导入mysql模块
const mysql2 = require('mysql2');
//2.建立与Mysql数据库的连接关系
const db = mysql2.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '111111',
    database: 'test'
})



//插入数据
// const user = { username: 'zzzzxf', password: '132456' }
//待执行的SQL语句，英文？表示占位符
// const sqlStr = 'insert into user(username,password) values(?,?)'
// const sqlStr2 = 'insert into user Set ?'
// db.query(sqlStr,[user.username,user.password], (err, results) => {
//     if (err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log("插入成功");
// })

// db.query(sqlStr2, user, (err, results) => {
//     if (err) return console.log(err.message);
//     if(results.affectedRows === 1) console.log("插入成功");
// })


//更新数据
// const user2 = { id: 7, username: 'mo', password: '753' }
// const sqlStr3 = 'update user SET ? where id=?'
// db.query(sqlStr3, [user2, user2.id], (err, results) => {
//     if(err) return console.log(err.message);
//     if(results.affectedRows === 1 ) console.log("更新数据成功");
// })

//删除数据

//注意，SQL语句中有多个占位符，则必须使用数组为每个占位符指定具体的值
//如果只有一个占位符，则可以省略数组
// const sqlStr4 = 'delete from user where id=?'
// db.query(sqlStr4, 7, (err, results)=>{
//     if (err) return console.log(err.message);
//     if(results.affectedRows === 1 ) console.log("删除数据成功");
// })



//标记删除，修改数据的status状态为标记删除，因为直接删除数据太危险，容易导致数据丢失无法找回
const sqlStr5 = 'update user set status=? where id = ?'
db.query(sqlStr5, [1, 6], (err, results) => {
    if (err) return console.log(err.message);
    if(results.affectedRows === 1) console.log("标记删除数据成功");
})





//查询
const s1 = 'select * from user'
db.query(s1, (err, results) => {
    //mysql模块工作期间报错了
    if (err) return console.log(err.message);
    console.log(results);
})