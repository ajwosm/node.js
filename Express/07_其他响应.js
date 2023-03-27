//导入express
const express = require('express');
//创建应用对象
const app = express();
//创建路由
app.get('/other' ,(req,res) =>{
    //跳转响应
    //res.redirect('http://baidu.com')
    //下载响应
    //res.download(__dirname+'/package.json');
    //json响应
    // res.json({
    //     name:'尚硅谷',
    //     slogon:'让天下没有难学的技术',
    // })
    //响应文件内容
    res.sendFile(__dirname+'/index.html');
})
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/other')
})