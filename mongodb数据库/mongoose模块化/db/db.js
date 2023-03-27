/*
* success数据库连接成功的回调
* error 数据库连接失败的回调
* */
module.exports = function (success, error) {

//安装 mongoose
//导入 mongoose
    const mongoose = require('mongoose');
    mongoose.set('strictQuery', true);
    //导入配置文件
    const {DBHOST,DBPORT,DBNAME} = require('../config/config');
//3.连接mongodb 服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
    mongoose.connection.once('open', () => {
        success();

    })
    mongoose.connection.on('error', () => {
        error();
    })
//设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭')
    })
}