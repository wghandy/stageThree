// 1.引入express
const express = require('express');

// 2.引入路由
const allRouter = require('./02index.js');
//无路是在同目录还是字目录，都要写./

// 3.创建一个静态资源服务器
const app = express();



// 4.匹配静态资源服务器
/* 4.1这里会先执行15行代码，
如果没有找到资源，则内有next()，自行往下执行*/
app.use(express.static('./'));

app.use(allRouter);

app.listen(1904,()=>{
    console.log("链接服务器成功1904");
    
})