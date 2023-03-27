//导入express
const express = require('express');
const fs = require('fs');
const path = require('path');
//创建应用对象
const app = express();


function recorMiddleware(req,res,next){
    //获取url和ip
    let {url,ip} = req;
    console.log(url,ip);
    //将信息保存在文件access.log
    fs.appendFileSync(path.resolve(__dirname,'./access.log'),`${url} ${ip}\r\n`);
    //调用next()
    next();
}
//使用中间件函数
app.use(recorMiddleware)
//创建路由
app.get('/home',(req,res) =>{
    res.send('前台首页');
})
app.get('/admin',(req,res) =>{
    res.send('后台首页');
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
})