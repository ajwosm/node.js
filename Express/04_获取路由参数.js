//导入express
const express = require('express');
//创建应用对象
const app = express();
//创建路由
app.get('/:id.html',(req,res) =>{
    console.log(req.params.id);
    res.end('hello express');
})
//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
})