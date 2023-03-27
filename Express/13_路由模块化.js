/*
* 针对 /admin /setting 的请求，要求URL携带code = 521 参数，如未携带提示[暗号错误]*/
//导入express
const express = require('express');
const homerouter = require('./routes/homeRouter')
const adminrouter = require('./routes/adminRouter')
//创建应用对象
const app = express();
//设置
app.use(homerouter);
app.use(adminrouter);
app.get('*', (req, res) => {
    res.send('<h1>404 Not Found</h1>');
})
console.log()
//监听端口
app.listen(3000, () => {
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/home')
    console.log('http://127.0.0.1:3000/search')
    console.log('http://127.0.0.1:3000/admin')
    console.log('http://127.0.0.1:3000/setting')
})