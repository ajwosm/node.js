var express = require('express');
var router = express.Router();

//导入shortid
const shortid = require('shortid');

//导入AccountModel
const AccountModel = require('../../models/AccountModel');
// console.log(moment('2003-10-04').toDate())

/* 记账本列表 */
router.get('/account', function (req, res, next) {
    //获取账单信息
    // let accounts = db.get('accounts').value();
    // console.log(accounts);
    AccountModel.find().sort({time: -1}).exec((err,data)=>{
            if (err){
                console.log('读取失败');
                return;
            }
        // console.log(data)
        res.render('list', {accounts: data});
    })

});

//添加记录
router.get('/account/create', function (req, res, next) {
    res.render('create');
});
//新增记录
router.post('/account', (req, res) => {
    //查看表单数据
   // console.log(req.body);
        //插入数据库
    AccountModel.create({
    ...req.body,
    },()=>{
        //成功提醒
        let id =shortid.generate();
// //写入文件
//         db.get('accounts').unshift({id:id,...req.body}).write();
        res.render('tixing', {mgs: '添加成功··', url: '/account'});
    })



})
//删除
router.get('/account/:id', function (req, res, next) {
    //获取id
    let id = req.params.id;
    //删除
   AccountModel.deleteOne({_id:id},(err)=>{
       if (err){
        res.status(500).send('删除失败');
       }
       //提醒
       res.render('tixing', {mgs: '删除成功··', url: '/account'});
   })

});
console.log('http://127.0.0.1:3000/account')
module.exports = router;
