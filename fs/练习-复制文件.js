/*
* 需求：
* 复制pic文件夹下面的13.jpg*/
const fs = require('fs')
const process = require('process')

//方式一readFile
//读取文件内容
/*
let data =fs.readFileSync('./pic/13.jpg')
//写入文件
fs.writeFileSync('./pic/13-1.jpg',data)
console.log(process.memoryUsage()) //rss 31426800 字节
*/                                     //31887360

// 方式二
// 创建读取流对象
const rs = fs.createReadStream('./pic/13.jpg')
// 创建写入流对象
const ws = fs.createWriteStream('./pic/13-2.jpg')
//绑定data事件
// rs.on('data',chunk => {
//     ws.write(chunk)
// })
// rs.on('end',()=>{
//     console.log(process.memoryUsage())
// })
rs.pipe(ws) //pipe管道