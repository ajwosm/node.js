const fs = require('fs')

//调用rename方法
/*
fs.rename('./座右铭.txt','./论语.txt',err => {
    if (err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})*/
fs.rename('./data.txt','./pic/data.txt',err => {
    if (err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})