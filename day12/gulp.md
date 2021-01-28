# 什么是 gulp 
- 是自动化构建工具


 # 安装
- npm init -y
- npm i gulp-cli -g 只需要第一次使用安装一次即可
- npm i gulp -D 每次新建一个gulp包都需要下载



# 语法
```javascript
    const gulp = reuqire("gulp");

    // gulp.src(dirpath||filepath)  读取文件

    // gulp.dest(dirpath || filename ) 写入文件

    // 链接管道
    gulp.src("路径").pipe(gulp.dest("路径"))

```


# 插件  
- 根据你自己的需要去百度找插件
- 去npm搜索插件
- 先下载  再引入  最后使用  

# 常见的插件
- gulp-htmlmin  压缩html
- gulp-clean-css  压缩css
- gulp-uglify  压缩js     (只能压缩的es5 es3的代码)
- gulp-babel   编译js  （es6 =>  es5 es3）
- gulp-rename  改名字
- gulp-image  压缩图片
- gulp-sass  编译sass   ( sass => css )
