/**
    webpack配置文件
        > 是一个commonjs规范的莫文件
        * 入口: entry
        * 测试服务器：devServer
        * 加载器: loader
        * 插件：plugin
 */
const path = require('path');//path是nodejs里的原生模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

 module.exports = {
    /*  mode:'development'可以设置多个入口，
    因为时单页面程序因此只需要一个入口，
    同时就要plugins那配置多页面，看最后一个*/
    entry:'./src/main.js',//1
    // 配置出口
    output:{
        //编译后的文件路径:当前目录下的 dist文件夹
        path:path.join(__dirname,'dist'),

        // 输出文件名: 文件名称：bundel_与拿来为文件名_hash前五位
        filename: 'bundle_[name]_[hash:5].js'
    },

    devServer:{           //2
        contentBase:'./src',
        open:true
     },
    //  加载器
    module:{               //3
        rules:[
            //js&jsx
            {
                //匹配
                test:/\.jsx?$/,//因为.有特殊含义，需要转意，因此加入\.
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react']
                    }
                }
            },
            //css
            {
                test:/\.css$/,
                // 加载器的简写
                // 加载器的执行顺序：右往左
                use:['style-loader','css-loader']
            },
            //sass
            {
                test:/\.sass$/,
                // 加载器的简写
                // 加载器的执行顺序：右往左
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    // 插件
    plugins:[              //4
        // 以某个文件作为模板生成html文件
        new HtmlWebpackPlugin({
			template:'./src/template.html',
			hash:true,
			title:'首页'
        }),
        new CleanWebpackPlugin()
    ]
 }
