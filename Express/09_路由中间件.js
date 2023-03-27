/*
* 针对 /admin /setting 的请求，要求URL携带code = 521 参数，如未携带提示[暗号错误]*/
//导入express
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();


//创建路由
app.get('/home',(req,res) =>{
    res.send('前台首页');
})
//声明中间件函数
let checkCodeMiddleware = (req,res,next)=>{
    //判断url中是否code参数等于521
    if (req.query.code === '521'){
        next();
    }else {
        res.send('暗号错误');
    }
}
app.get('/admin',checkCodeMiddleware,(req,res) =>{
    res.send('后台首页');

})
app.get('/setting',checkCodeMiddleware,(req,res)=>{
    res.send('设置页面');
})
app.get('*',(req,res) =>{
    res.send('<h1>404 Not Found</h1>');
})
console.log()
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/home')
    console.log('http://127.0.0.1:3000/admin')
    console.log('http://127.0.0.1:3000/admin?code=521')
    console.log('http://127.0.0.1:3000/setting')
    console.log('http://127.0.0.1:3000/setting?code=521')
})