/*
* 按照要求搭建HTTP服务
*
* GET  /login 显示表单网页
* POST  /login 获取表单中的【用户名和密码】
* */
//导入express
const express = require('express');
const bodyParser = require("body-parser");
//创建应用对象
const app = express();
//解析 JSON 格式的请求体的中间件
// const jsonParser = bodyParser.json();
//解析querystring 格式请求体的中间件
const urlencodeParser = bodyParser.urlencoded({extended:false})
app.use(express.static(__dirname+'/注册'))
//创建路由
app.get('/login',(req, res)=>{
    res.sendFile(__dirname+'/注册/index.html');
})
app.post('/login',urlencodeParser,(req, res)=>{
    //获取用户名和密码
    console.log(req.body);
    res.end('ok');
})
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/login')
})
