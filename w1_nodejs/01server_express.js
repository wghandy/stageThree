/**
 * 利用express制作静态资源服务器
 * middleware 中间件 是封装某些处理数据功能的函数，在request和respond调用之前执行，本质上来说，一个express就是在调用各种中间件
 */

//引入express模块
const express = require('express');//缓存下来

// 利用express创建一个服务器
const app = express();

//静态资源服务器
app.use(express.static('./'));//把当前资源指定为动态资源服务器

// console.log(11);

// app.use((req,res,next)=>{
//     res.send({
//         name: "wgh",
//         age: 18
//     });
//     next();
// })
//监听端口
app.listen(1904,()=>{
    console.log('server is running on http://localhost:1904');
    
    
})