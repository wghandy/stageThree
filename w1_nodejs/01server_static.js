//创建静态资源服务器
//引入http模块
const http = require('http');
//引入url模块
const url = require('url');
//引入path模块 
const path = require('path'); 
//引入fs模块 文件处理
const fs = require('fs');
//引入mine类型
const mime = require('./js/mime');


http.createServer((request,response)=>{//require签的，response后端的，nodejs主要用的是response
    //需要转码，不然显示会乱码
    // response.writeHead(200,{//向请求客户端发送响应头
    //     "content-type":"text/html;charset=utf8"
    // })

    // 打印url路径
    console.log(request.url);//获取浏览器路径 /img/g1.jpg

    /* 1.格式化url，并格式化url中的search参数*/
    // 解构文件路径
    let {pathname} = url.parse(request.url,true);
    console.log(pathname);//img/g1.jpg
    

    /* 2.使用path模块获取文件路径*/
    // 结构文件路径
    // 获取拓展名
    let extname = path.extname(pathname).substring(1);//从路径.js得到js
    console.log("bb:" + path.extname(pathname));
    
    console.log("extname:" + extname);

    /* 3.获取真实路径*/
    /*用于拼接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。*/
    let realpath = path.join(__dirname,pathname);
    
    /*01. _dirname获取全局路径 C:\Users\wgh\Desktop\node js\wgh*/
    console.log("__dirname:",__dirname);
    /*0.2 /img/g1.jpg*/
    console.log("pathname:" + pathname);
    /*03. 拼接得： realpath: C:\Users\wgh\Desktop\node js\wgh\img\g1.jpg*/
    console.log("realpath:",realpath);
    

    /*4.异步版本读取文件*/
    fs.readFile(realpath,(err,data)=>{
        // err:读取错误时的信息,默认:null
        // data:文件类型（发给前端，就是响应给前端的文件）
        if(err){
            response.writeHead(404,{"content-type":'text/html;charset=utf8'});
            response.end("你访问的地址${pathname}不存在")
            return;
        }

        console.log(data);
        
        //正确读取文件
        response.writeHead(200,{'content-type':mime[extname] + ';charset=utf8'});
        response.end(data);
    });
    
    // response.end("静态资源服务器");
}).listen(1904,()=>{
    console.log('服务器连接成功');
})














