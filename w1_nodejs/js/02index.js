//引入express
const express = require('express');

//引入路由
const Router = express.Router();

//以路由为路径
const goodRouter = require('./02good');
const regRouter = require('./02reg');

Router.use(express.urlencoded(), express.json());

//引入good的信息
Router.use('/good',goodRouter);
console.log(111);

Router.use('/reg',regRouter);

// commonJs模块化
/*module.exports 对象是由模块系统创建的。
在我们自己写模块的时候，需要在模块最后写好模块接口，
声明这个模块对外暴露什么内容，
module.exports 提供了暴露接口的方法。*/
module.exports = Router;