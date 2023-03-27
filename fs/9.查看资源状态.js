const fs = require('fs')

//stat 方法 status 缩写 状态

fs.stat('./pic/13.jpg',(err,data)=>{

    if (err){
        console.log('操作失败')
        return
    }
    // console.log(data)
    console.log(data.isFile())//查看资源是不是文件
    console.log(data.isDirectory())//查看资源是不是文件夹
})