/*
* 新建一个文件，座右铭.txt,写入内容，三人行，必有我师焉
* */
//1.导入fs模块
const fs = require('fs');

//2.写入文件

// fs.writeFile('./座右铭.txt','三人行，必有我师焉',err=>{
//     if (err) {
//         //err 写入失败:错误对象  写入成功：null
//         console.log("写入失败")
//         return;
//     }
//     console.log("写入成功")
// })

//同步写入

fs.writeFileSync('data.txt','tst')