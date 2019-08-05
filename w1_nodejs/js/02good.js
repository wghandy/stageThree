// 引入express
const express = require('express');
// 引入路由
const Router = express.Router();


//或许所有商品
Router.get('/', (req, res) => {
    let {
        id
    } = req.query; //1、url中?问号后面的内容，获取id值，判断返回值
    if (id) {
        res.send({
            code: 1000,
            data: [],
            msg: `返回第${id}个商品`
        })
    }
    res.send({
        code: 1000,
        data: [],
        msg: '所有商品'
    })
})
// 获取某个文件
Router.get('/:id', (req, res) => {
    let {
        id
    } = req.params;
    console.log(req.params);

    res.send({
        code: 1000,
        data: [],
        msg: `传回第id=${id}个商品`
    })
})
//添加某个商品
Router.post('/:id', (req, res) => {
    let {id} = req.params;
    console.log(req.params);
    res.send({
        code: 1000,
        data: [],
        msg: `添加第id=${id}个商品`
    })
})
// 删除某个商品的请求用delete
Router.delete('/:id', (req, res) => {
    let {id} = req.params;
    console.log(req.params);
    res.send({
        code: 1000,
        data: [],
        msg: `删除第id=${id}个商品`
    })
})
// 更新某个文件
Router.put('/:id', (req, res) => {
    let {id} = req.params;
    console.log(req.params);

    // console.log(req.body);
    
    res.send({
        code: 1000,
        data: [],
        msg: `修改第id=${id}个商品`
    })
})

module.exports = Router;