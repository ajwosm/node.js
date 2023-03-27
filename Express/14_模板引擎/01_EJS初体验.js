//安装ejs
//导入ejs
const ejs = require('ejs');
const fs = require('fs');
//声明字符串
let china = '中国';
let weather = '今天天气不错';
let str = fs.readFileSync('./test.html').toString()
//使用ejs渲染
let result = ejs.render(str,{china,weather});
console.log(result);