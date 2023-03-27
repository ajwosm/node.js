//导入http模块
const http = require('http')
const fs = require('fs')
//创建服务对象

const server = http.createServer((request,response)=>{
    let {pathname} = new URL(request.url,'http://127.0.0.1')
    if (pathname === '/'){
        let html = fs.readFileSync(__dirname+'/home.html');
        response.end(html);//设置响应体
    }else if (pathname === '/index.css'){
        let css =fs.readFileSync(__dirname+'/index.css')
        response.end(css)
    }else if (pathname ==='/index.js'){
        let js =fs.readFileSync(__dirname+'/index.js')
        response.end(js)
    }else{
        response.statusCode = 404
        response.end('404 Not Found')
    }


});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log("服务已经启动。。。")
})