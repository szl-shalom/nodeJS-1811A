# 什么是Node？？？
- node是一款软件，是运行在服务端的javascript
- node是基于I/O  I是input  O是output  
- node是基于事件驱动的，性能高。
- node是运行在谷歌V8引擎下的

# 配置环境变量
- 打开我的电脑 =>  鼠标右键  =>  属性 =>  高级系统设置  =>  高级选项  =>  环境变量  => 系统变量里面找path属性

# 常见的终端执行
- cls  清空
- cd  修改路径
- ls 查看当前目录
- mkdir  创建文件夹
- rmdir  删除文件夹
- echo 文件内容 > 文件名称.扩展名


# 检查node的安装
- 在 终端 执行指令
- - node -v
- - npm -v 


# node运行JS
- node  文件名称


# node遵循CommonJS规范
- 模块抛出
```javascript
    let a = 1;
    // 抛出标识符a
    module.exports = a;

```
- 模块引入  
```javascript
    // 引入的模块路由必须是相对路径 
    let result = require("相对模块路径");
```
- 模块抛出以module.exports为主，exports是module.exprots的一个引用