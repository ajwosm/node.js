//声明一个函数
function tiemo(){
    console.log('贴膜...')
}

//捏脚
function niejiao(){
    console.log('niejiao');
}

//暴漏数据
// module.exports = {
//     tiemo,
//     niejiao
// }

// exports 暴漏数据
// exports.tiemo = tiemo;
// exports.niejiao = niejiao;

//1.module.exports 可以暴漏‘任意’数据
module.exports ='iloveyou';
// module.exports = 521;


//2.不能使用"exports = value"的形式暴漏数据
//exports = 'iloveyou'//  X

module.exports === exports?console.log('dengyu '):console.log('budengyu')
