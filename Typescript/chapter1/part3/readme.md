# 用 webpack 打包

    1.初始化项目 npm init -y 创建package.json文件
    2.下载构造工具 npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin
    3.编写webpack.config.js和tsconfig.json两个配置文件
    4.package.json中test旁边增加build：webpack
    5.npm run build 执行打包
    6.npm i -D html-webpack-plugin 创建一个打包时自动生成的html工具
    7.webpack.config.js 中配置
        plugins: [
            new HTMLWebpackPlugin({
                // title:"这是一个自定义的title"
                //不想一个个设置配置选项，可以直接给他一个模板
                template:"./src/index.html"
            })
        ]
    8.npm i -D webpack-dev-server  创建一个webpack服务器   可以实现写完代码保存   浏览器便会自动更新重新编译
    9.设置package.json的开启代码 start:"webpack serve  --open"
    10.npm i -D clean-webpack-plugin  安装后和前面html工具一样配置   可以在重新编译后清除dist中多余的文件
    11.npm i -D @babel/core @babel/preset-env babel-loader core-js
