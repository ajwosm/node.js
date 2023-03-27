var express = require('express');
var router = express.Router();

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync(__dirname + '/../data/db.json')
const db = low(adapter)

//导入shortid
const shortid = require('shortid');

//导入moment
const moment = require('moment');

//导入AccountModel
const AccountModel = require('../models/AccountModel');
// console.log(moment('2003-10-04').toDate())

/* 记账本列表 */
router.get('/account', function (req, res, next) {
    //获取账单信息
    let accounts = db.get('accounts').value();
    console.log(accounts);
    res.render('list', {accounts: accounts});
});

//添加记录
router.get('/account/create', function (req, res, next) {
    res.render('create');
});
//新增记录
router.post('/account', (req, res) => {
    //获取请求体数据
    //  console.log(req.body);
    //插入数据库

    AccountModel.create({
        ...req.body,
    },(err,data)=>{
        if (err){
            res.status(500).send('插入失败');
            return;
        }
        console.log(...req.body);
        //成功提醒
        res.render('tixing', {mgs: '添加成功··', url: '/account'});
    })
    //生成id
    // let id  = shortid.generate()
    // // //写入文件
    //  db.get('accounts').unshift({id:id,...req.body}).write();

})
//删除
router.get('/account/:id', function (req, res, next) {
    //获取id
    let id = req.params.id;
    //删除
    db.get('accounts').remove({id: id}).write();
    //
    res.render('tixing', {mgs: '删除成功··', url: '/account'});
});
console.log('http://127.0.0.1:3000/account/create')
module.exports = router;
