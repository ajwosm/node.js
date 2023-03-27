//导入express
const express = require('express');
const {response} = require("express");
//创建应用对象
const app = express();
//创建路由
app.get('/response',(req,res) =>{
   //原生响应
   //  res.statusCode = 404;
   //  res.statusMessage = 'love';
   //  res.setHeader('xxx','yyy');
   //
   //  res.write('hello')
   //
   //  res.end('hello express');
    //express响应
    // res.status(500);
    // res.set('bbb','sss');
    // res.send('你好');
    res.status(500).set('abc','sss').send('nihao')

})
//监听端口

app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/response')
})