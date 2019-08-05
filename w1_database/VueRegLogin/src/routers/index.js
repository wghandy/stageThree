//引入express
const express = require('express');

//引入路由
const Router = express.Router();

//以路由为路径
const goodRouter = require('./good');
const regRouter = require('./reg');
const loginRouter = require('./login');

Router.use(express.urlencoded(), express.json());
// CORS的跨域

const allowOrigin = ['http://127.0.0.1:1904', 'http://www.baidu.com','http://localhost:1904','http://localhost:8080'];
Router.use((req, res, next) => {
    let idx;
    let has = allowOrigin.some((item, i) => { 
        idx = i;
        return item.includes(req.headers.origin); //有就返回true
    })
    if (has) { //只写变量代表true
        // 1设置跨域响应头 Access-Control-Allow-Origin： 访问控制允许路由 *允许全部的意思
        res.header("Access-Control-Allow-Origin", "*");
        //2请求头里必须包含以下的信息才能跨域 Access-Control-Allow-Headers：访问控制允许请求头
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        //3只允许以下 PUT,POST,GET,DELETE,OPTIONS等 ajax 请求 Access-Control-Allow-Methods：访问控制允许方法
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    }


    // CORS跨域请求中的OPTIONS预请求
    if(req.method === "OPTIONS"){
        res.sendStatus(200);
    }else{
        next();
    }
})

//引入各个的信息
Router.use('/good', goodRouter);
Router.use('/reg', regRouter);//多了个点啊'./spider'；；；正确写法: '/spider'
Router.use('/login', loginRouter);

module.exports = Router;