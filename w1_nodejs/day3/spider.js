// 引入express
const express = require('express');
// 引入路由
const fs = require('fs');
const path = require('path');
const Router = express.Router();

const request = require('request');
const cheerio = require('cheerio');

console.log('-');

//爬虫数据
// 需要添加
Router.get('/', (req, res) => {
    console.log('--');
    let goodList = [];
    request('http://shop.jiuxian.com/brand-382/activity-3376.htm?area=6', (err, response, body) => {
        // console.log(body);
        const $ = cheerio.load(body); //将body封装到$

        $('.shopComBox li').each((index, ele) => {
            let $let = $(ele);
            //find() 方法获得当前元素集合中每个元素的后代，通过选择器、jQuery 对象或元素来筛选。
            let name = $let.find('.sCom-name').text();
            let price = $let.find('.sCom-price em').text();
            let imgUrl = $let.find('.sComPic img').attr('src');
            goodList.push({
                name,
                price,
                imgUrl
            });
            // 获取文件名
            let fileName = path.basename(imgUrl);
            // 1.将图下载到本地
            request(imgUrl).pipe(fs.createWriteStream(`img/${fileName}`));//返回一个文件流，英文stream

        })
        // 1.小文件的读取
        // 将路径改成绝对路径，用path
        // let filePath = path.join(__dirname, '02reg.js');
        // console.log('filePath:', filePath); //没有login.js,你写什么

        // 方法一

        // 读取login.js这个文件    
        // fs.readFile(filePath,(err,data)=>{
        //     if(err){
        //         console.log('err:',err);
        //     }
        //     console.log('data:',data.toString());//加方法toString()转成文字
        // })

        //方法二 工作中可能经常用到

        // try{
        //     let data = fs.readFile(filePath);
        //     console.log('data:',data.toString());//加方法toString()转成文字
        // }catch(err){
        //     console.log('err:',err);
        // }

        // 2.大文件的读取，也可以读取小文件
        // 01创建读取流
        // let data = '';
        // let readerStream = fs.createReadStream(filePath); //创建读写流
        // 02 两个事件流之处理流事件
        // readerStream.on('data', (chunk) => {
        //     console.log('chunk:', chunk.toString());

        //     data += chunk; //将文件存到data里
        // })
        // // 03两个时间流之end事件
        // readerStream.on('end', () => {
        //     console.log('end:', data);
        // })

        // 3、写入流
        // let writeStream = fs.createWriteStream('uploads/output.txt');
        // writeStream.write('are you ok?','utf-8');
        // writeStream.end();
    

        res.send(goodList);
    })
})


module.exports = Router;