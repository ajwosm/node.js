//导入express
const express = require('express');
//创建应用对象
const app = express();
//静态资源中间件
app.use(express.static(__dirname+'/public'));
//创建路由
app.get('/',(req,res) =>{
    res.send('home');
})
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000/xin2.html')
})