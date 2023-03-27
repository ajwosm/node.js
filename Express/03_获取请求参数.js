//导入express
const express = require('express');
//创建应用对象
const app = express();
//创建路由
app.get('/home',(req,res) =>{
//原生操作
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.httpVersion)
//     console.log(req.headers)
    // express操作

    console.log(req.path)
    console.log(req.query)
    console.log(req.ip)
    console.log(req.get('host'))
    res.end('hello express');
})
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
})