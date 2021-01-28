# 什么是npm   =>  全称 ：  node package manage
- 是nodeJS的包管理器


# 配置npm
- 设置淘宝镜像  npm config set registry http://registry.npm.taobao.org/
- 设置全局安装位置  npm config set prefix "路径"
- 设置全局缓存位置  npm config set cache "路径"
- 查看npm配置信息  npm config ls
- 查看全局安装路径 npm config get prefix 
- 查看全局缓存路径 npm config get cache

# 可以下载第三方npm镜像管理工具----nrm
- 1.全局下载nrm =>  npm install nrm -g
- 2.查看镜像源  nrm ls
```javascript
  npm -------- https://registry.npmjs.org/
  yarn ------- https://registry.yarnpkg.com/
  cnpm ------- http://r.cnpmjs.org/
  taobao ----- https://registry.npm.taobao.org/
  nj --------- https://registry.nodejitsu.com/
  npmMirror -- https://skimdb.npmjs.com/registry/
  edunpm ----- http://registry.enpmjs.org/

```
- 3.切换镜像源  nrm use <镜像源名称>

# 使用npm 
- 包名  需要时英文单词小写   单词与单词之间可以使用连字符或者下划线链接  (不可以出现汉字)
- 初始化包  npm init -y
- - 可以看到当前包下出现一个包的描述文件package.json
```javascript
    {
        "name": "demo-npm",  //包的名称
        "version": "1.0.0",  //版本
        "description": "",   //描述
        "main": "index.js",  //入口
        "scripts": {         //测试脚本命令
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],      //关键字
        "author": "",        //作者
        "license": "ISC"     //协议
    }


```
- 下载第三方的包 
<!-- 本地下载 -->
- - npm install <包名>          生产环境下载   =>安装依赖 dependencies
- - npm install <包名> --save(-S)   生产环境下载   =>安装依赖 dependencies
- - npm install <包名> --save-dev(-D)   开发环境下载   =>安装依赖 devDependencies
- - npm uninstall <包名>  卸载包
<!-- 全局下载 -->
- - npm install <包名> -g   

# 发包
- 注册账号
- - 讲师账号：qwe896673315   密码：qwe04549685.0
- 新建一个包
- - 初始化  npm init -y
- - 新建一个index.js文件
- 进入该包的终端
- - 注意： 镜像必须时npm镜像
- - 登录  npm login
- - 发布  npm publish


# 问题汇总
- XX脚本不让运行 。。。。。
- set-ExecutionPolicy RemoteSigned    选A 