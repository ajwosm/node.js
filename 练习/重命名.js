const fs = require('fs')

//读取code文件夹
const files = fs.readdirSync('./code')

console.log(files)

//遍历数组

files.forEach((item,index)=>{

    let newName = index+1+'-'+item;
    console.log(newName)
    fs.renameSync(`./code/${item}`,`./code/${newName}`)
})