/*
* 通过isLogin 决定最终的输出内容
* true 输出 <span>欢迎回来</span>
* false 输出 <button>登录</button> <button>注册</button>
* */
const fs = require('fs');
const ejs = require('ejs');
//原生js实现
 let isLogin = true;
 let html = fs.readFileSync('./home.html').toString();
// if (isLogin){
//     console.log('<span>欢迎回来</span>')
// }else{
//     console.log('<button>登录</button> <button>注册</button>');
// }
// ejs实现
let result = ejs.render(html,{isLogin:isLogin})
console.log(result)
