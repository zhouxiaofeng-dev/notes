/**
 * 一、
 * devDependencies节点(开发依赖包)：如果某些包只在项目开发时会用到，项目上线后不会用到，就把这些包记录到devDependencis节点中
 * npm install 包名  -D
 * 
 * dependencies节点(核心依赖包):如果某些包开发和上线后都用得到，就加入到该节点中。
 * 
 * 二、
 * 多人共享的问题:node_modules的体积太大，当push到github或者gitee时需要删除该目录或者加入到.gitignore中(需要有package.json文件记录用了哪些包)
 * 当拉代码下来后只需要npm i安装指定包即可
 * 
 * 三、
 * 查看当前npm config get registry 
 * 切换淘宝源：npm config set registry:https://registry.npm.taobao.org/
 * 
 * 四、nrm：快速查看和切换下包的镜像源
 * 安装：npm i nrm -g
 * 查看所有的镜像源:nrm ls
 * 切换镜像源:nrm use taobao
 * 
 * 
 * 
 */