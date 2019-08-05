// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();
console.log("登录");

const {mongo:{find}} = require('../db');

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;console.log(username,password);
    

    let result = await find('user',{username,password});
    console.log(result);

    res.send(result);
})

module.exports = Router;