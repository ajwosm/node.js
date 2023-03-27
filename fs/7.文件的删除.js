const fs = require('fs')

// 调用unlink unlinkSync

/*
fs.unlink('./观书有感.txt',err => {
    if (err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})
*/
// 调用rm方法  14.4  rmSync
fs.rm('./论语.txt',err => {
    if (err){
        console.log('操作失败')
        return
    }
    console.log('操作成功')
})
