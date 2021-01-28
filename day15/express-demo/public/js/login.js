
let user = document.querySelector(".user"),
    pwd = document.querySelector(".pwd"),
    login = document.querySelector(".login"),
    register = document.querySelector(".register");




register.addEventListener("click", () => {
    axios.post("/api/register",{
        user:user.value,
        pwd:pwd.value,
    }).then(result=>{
        if(result.data.code){
            alert("注册成功")
        }else{
            alert("注册失败")
        }
    })
})

login.addEventListener("click", () => {
    // 发送请求
    axios.post("/api/login", {
        user: user.value,
        pwd: pwd.value
    }).then(result => {
        if (result.data.code) {
            location.href = "index.html"
        } else {
            alert("账户棉麻不正确")
        }
    })
})