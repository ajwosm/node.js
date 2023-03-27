//1.引入fs模块

const fs = require('fs')
// fs.appendFile('./座右铭.txt','，则其善者而从之，则其不善者而改之。',err => {
//     //判断
//     if (err){
//         console.log('写入失败')
//         return
//     }
//     console.log('写入成功')
// })
// fs.appendFileSync('./座右铭.txt','\r\n温故而知新，可以为师矣')
//writeFile实现追加写入
fs.writeFile('./座右铭.txt','iloveyou',{flag:'a'},err=>{
    if (err){
        console.log('写入失败')
        return
    }
    console.log('写入成功')
})