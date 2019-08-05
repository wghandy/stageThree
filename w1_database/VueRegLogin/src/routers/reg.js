// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();
console.log("注册");

const {formData} = require('../utils');
// 引入mongo
const {insert,find} = require('../db/mongo');
// 添加用户
Router.post('/',async (req,res)=>{
    //insert('user',{})
    //async & await 实现：用同步的代码实现异步的操作
    //async & await 是：  ES7的知识
    let data = await insert('user',req.body);
    res.send(formData({data}));
})
//验证用户是否存在
Router.get('/check',async (req,res)=>{//check检测的意思
    let {username} = req.query;
    let data = await find('user',{username});

    if(data.length>0){
        return res.send(formData({code:250}));
    }
    res.send(formData());
})

module.exports = Router;