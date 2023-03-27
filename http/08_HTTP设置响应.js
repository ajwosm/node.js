//导入http模块
const http = require('http')

//创建服务对象

const server = http.createServer((request,response)=>{

    //1.设置相应状态码
    //response.statusCode = 203

    //2.相应状态描述
    //response.statusMessage = 'iloveyou'

    //3.响应头
    response.setHeader('content-type','text/html;charset=utf-8');
    response.setHeader('Servsr','node.js')

    //4.响应体
    response.write('love')
    response.write('love')
    response.write('love')//可以多次调用
    response.end('你好');//只能有一个end方法 设置响应体

});

//监听端口，启动服务
server.listen(9000,()=>{
    console.log("服务已经启动。。。")
})