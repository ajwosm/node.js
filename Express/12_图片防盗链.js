//导入express
const express = require('express');
//创建应用对象
const app = express();

//声明中间件
app.use((req, res, next)=>{
    //检测请求头中的referer 是否为127.0.0.1
    //获取referer
    let referer = req.get('referer')

    if (referer){
        //实例化
        let url = new URL(referer);
        //获取hostname
        let hostname = url.hostname;
        console.log(hostname);
        if (hostname !== '127.0.0.1'){
            res.status(404).send(`<h1>404 Not Found</h1>`)
                return
        }
    }

    next()
})
//静态资源中间件
app.use(express.static(__dirname+'/public'));

//监听端口
app.listen(3000,()=>{
    console.log('端口3000正在监听中。。。')
    console.log('http://127.0.0.1:3000')
    console.log('http://localhost:3000')
})