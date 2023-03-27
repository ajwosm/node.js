//导入新的集合
//导入db
const db = require('./db/db');
const mongoose = require('mongoose');
const MovieModel = require('./models/movieModel');
//调用db中的函数
db(()=>{
    //创建电影的模型对象
    MovieModel.create({
        title : '活着',director: '余华'
    },(err,data)=>{
    //判断
        if(err){
            console.log(err);
            return
        }
        console.log(data);
    })
},()=>{
    console.log('导入失败')
})