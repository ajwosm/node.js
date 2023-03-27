//导入http模块
const http = require('http')
// 1.导入url模块
const url = require('url')

//创建服务对象
const server = http.createServer((request,response)=>{
    //实例化 URL 的对象
    let url = new URL(request.url,'http://127.0.0.1');
    // 输出路径
    console.log(url.pathname)
    //输出 keyword 查询字符串
    console.log(url.searchParams.get('keyword'))



    response.end('url new');//设置响应体
});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log("服务已经启动。。。")
})