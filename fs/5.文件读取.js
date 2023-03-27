const fs = require('fs')

//2.创建读取流对象
const rs = fs.createReadStream('./pic/13.jpg');

//3.绑定data事件     chunk 块儿
rs.on('data',chunk => {
    console.log(chunk.length)  //655536 字节 => 64kb
})

rs.on('end',()=>{
    console.log("读取完成")
})