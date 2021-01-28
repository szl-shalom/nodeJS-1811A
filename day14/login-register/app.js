const express = require("express")
const app = express();
const fs = require("fs")
// 中间件
app.use(express.static("public", {
    index: "login.html"
})); //静态资源
app.use(express.json()) //处理post json 



// 登录接口
app.post("/api/login", (req,res) => {
    // 1.获取请求数据
    let { user , pwd  } = req.body;
    // 2. 读取本地数据
    let data =  JSON.parse(fs.readFileSync("mock/user.json"))
    // 3.判断用户名和密码是否同时存在数据中
    let isExit = data.find(itme=>itme.user == user && itme.pwd === pwd);
    // 判断状态 返回结果
    isExit ? res.send({ code:1  }) : res.send({code:0});
})


//  注册接口
app.post("/api/register",(req,res)=>{
      // 1.获取请求数据
      let { user , pwd  } = req.body;
      // 2. 读取本地数据
      let data =  JSON.parse(fs.readFileSync("mock/user.json"));
      // 3.判断用户名和密码是否同时存在数据中
       let isExit = data.find(itme=>itme.user == user);
      // 4.判断存在
      if(isExit){
            res.send({ code:0 })
      } else{
        //   推入数据
            data.push(req.body);
        //  更新本地数据
            fs.writeFileSync("mock/user.json",JSON.stringify(data))
            // 返回信息
            res.send({ code:1 })
      }
})  


// 数据访问接口
app.post("/api/list",(req,res)=>{
    let data = fs.readFileSync("mock/list.json");
    res.send(data)
})


// 监听
app.listen(8080, () => console.log("8080!!!"))