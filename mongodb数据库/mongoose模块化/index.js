//导入db
const db = require('./db/db');
const mongoose = require('mongoose');
const BookModel = require('./models/BookModel');
db(() => {
//新增
    BookModel.create({
        name: '余华', author: '活着', price: 9.9,
    }, (err, data) => {
        //判断是否有错误
        if (err) {
            console.log(err)
            return;
        }
        //如果没有出错，输出data对象
        console.log(data);
        //8.关闭数据库连接
        // mongoose.disconnect();
    })
}, () => {
    console.log('导入失败')
})