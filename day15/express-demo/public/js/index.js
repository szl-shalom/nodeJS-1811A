// const { default: axios } = require("./axios");

let box = document.querySelector("tbody");



box.addEventListener("click",e=>{
    let tar = e.target;

    if(tar.className === "del"){
        let id = tar.getAttribute("myId");
        // 删除接口
        axios.post("/api/delete",{ id }).then(result=>{
            if(result.data.code)  render();
        })
    }
})




// 数据请求+渲染
function render() {
    axios.post("/api/list").then(result => {
        console.log(result.data)
        box.innerHTML = result.data.map(item => {
            return `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.sex ? "男":"女"}</td>
                <td>
                    <button>编辑</button>
                    <button class="del" myId=${item.id}>删除</button>
                </td>
            </tr>
            `
        }).join("")
    })

}

render()