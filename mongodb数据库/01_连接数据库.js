//安装 mongoose
//导入 mongoose
const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
//3.连接mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/cheng')
//4.设置连接成功的回调
mongoose.connection.once('open',()=>{
    // 5.创建文档的结构对象
    //设置文档的属性以及属性值的类型
    let BookSchema = new mongoose.Schema({
        name: String,
        author:String,
        price:Number,
    })
    //6.创建模型对象 对文档操作的封装对象
    let BookModel = mongoose.model('books',BookSchema);
    //7.新增
    BookModel.create({
        name:'吴承恩',
        author:'西游记',
        price:19.8,
    }, (err,data) =>{
    //判断是否有错误
        if (err){
            console.log(err)
            return;
        }
        //如果没有出错，输出data对象
        console.log(data);
        //8.关闭数据库连接
        mongoose.disconnect();
    })
    console.log('连接成功')
})
//设置连接错误的回调
mongoose.connection.on('error',()=>{
    console.log('连接失败')
})
//设置连接关闭的回调
mongoose.connection.on('close',()=>{
    console.log('连接关闭')
})
//关闭mongodb的连接
/*
setTimeout(()=>{
    mongoose.disconnect();
},2000);*/
