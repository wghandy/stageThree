// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();
console.log(1112);

Router.get('/',(req,res)=>{//post方式登录拿不到
    res.send("登录成功");
})

module.exports = Router;