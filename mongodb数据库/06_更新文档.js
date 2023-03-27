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
        is_hot:Boolean,
        ags:Array,
        pub_time:Date,
    })
    //6.创建模型对象 对文档操作的封装对象
    let BookModel = mongoose.model('books',BookSchema);
    //7.更新一条
    // BookModel.updateOne({name : '吴承恩'},{price:9.9},(err,data)=>{
    //     if (err){
    //         console.log('更新失败')
    //         return
    //     }
    //     // 输出data
    //     console.log(data)
    // })
    //批量更新
    BookModel.updateMany({price:9.9},{price:99.9},(err,data)=>{
        if (err){
            console.log('更新失败')
            return
        }
        // 输出data
        console.log(data)
    })
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
