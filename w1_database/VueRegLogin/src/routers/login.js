// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();
console.log("登录");

const {formData} = require('../utils');
const {mongo:{find}} = require('../db');

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;
    // console.log(username,password);
    
    let result = await find('user',{username,password});
    console.log("result",result.length);

    if(result.length>0){
        console.log(1);
        
        res.send(formData());
    }else{
        console.log(2);
        
        res.send(formData({code:250,msg:'login fail'}))
    }
})

module.exports = Router;