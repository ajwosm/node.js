const fs = require('fs')

// fs.mkdir('./html',err => {
//     if (err){
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })

//2-2递归创建

// fs.mkdir('./a/b/c',{recursive:true},err => {
//     if (err){
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })
// 2-3读取文件夹

// fs.readdir('./pic',(err,data)=>{
//     if (err){
//         console.log('操作失败')
//         return
//     }
//     console.log(data)
// })

//删除文件夹  rm  remove 移除

// fs.rmdir('./html',err => {
//     if (err){
//         console.log('操作失败')
//         return
//     }
//     console.log('操作成功')
// })

//递归删除
// fs.rmdir('./a',{recursive:true},err => {
//     if (err){
//         console.log('操作失败')
//         console.log(err)
//         return
//     }
//     console.log('操作成功')
// })

//建议使用

fs.rm('./a',{recursive:true},err => {
    if (err){
        console.log(err)
        return
    }
    console.log('操作成功')
})