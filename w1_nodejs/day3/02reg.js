// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();
console.log("注册");

Router.post('/',(req,res)=>{
    res.send("注册成功");
})

module.exports = Router;