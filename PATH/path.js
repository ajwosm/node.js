const fs = require('fs')
const path = require('path')

// fs.writeFileSync(__dirname + '/index.html','love')
// console.log(__dirname + '/index.html')
//规范的绝对路径
// resolve
console.log(path.resolve(__dirname,'./index.html'))

// sep分隔符

console.log(path.sep);//windows \ Linux  /

//parse 方法  __filename '全局变量'

console.log(__filename) //文件的绝对路径

let str = 'E:\\node\\PATH\\path.js'

//parse 解析路径并返回对象
console.log(path.parse(str))

//basename 快速获取文件名
console.log(path.basename(str))

//dirname快速获取文件目录名
console.log(path.dirname(str))

//extname 快速获取文件后缀名
console.log(path.extname(str))
