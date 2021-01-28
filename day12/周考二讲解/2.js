class Utils {
    isEmpty(obj) {
        if (Array.isArray(obj)) {
            if (obj.length) {
                console.log("数组的长度为" + obj.length);
            } else {
                console.log("数组为空");
            }
        } else {
            if (Object.keys(obj).length) {
                console.log("对象有" + Object.keys(obj).length + "个键值对")
            } else {
                console.log("对象为空");
            }
        }
    }
    loadingAsync(arr) {


        let p = arr.map(v => {
            if (v.includes(".css")) {
                return this.loadingCss(v)
            } else if (v.includes(".js")) {
                return this.loadingJS(v)
            } else if (v.includes(".jpg")) {
                return this.loadingImg(v)
            }
        })

        setTimeout(() => {
            console.log(p)
        }, 2000);
        return Promise.all(p)
    }
    loadingJS(url) {
        return new Promise((resolve, reject) => {
            console.log(url)
            let script = document.createElement("script")
            // script.setAttribute("type", "text/javascript");
            script.src = url;
            // script.onreadystatechange = function () {
            //     if (script.readyState == "loaded") {
            //         resolve(script)
            //     }
            // }

            // script.setAttribute("type", "text/javascript");
            script.onload = function () {
                resolve(script)
            }
            document.body.appendChild(script)
        })
    }
    loadingImg(url) {
        return new Promise((resolve, reject) => {
            let img = new Image();
            img.src = url;
            img.addEventListener("load", () => {
                resolve(img)
            })
        })
    }
    loadingCss(url) {
        return new Promise((resolve, reject) => {
            let link = document.createElement("link")
            link.rel = 'stylesheet';
            link.href = url;
            link.addEventListener("load", () => {
                resolve(link)
            })
            document.head.appendChild(link)
        })
    }

}



let u = new Utils();




// u.isEmpty([]) //空数组    
// u.isEmpty({}) //空独享
// u.isEmpty([{}, {}]) //数组长度2
// u.isEmpty({
//     a: 1,
//     b: 2
// }) //对象两个兼职对



u.loadingAsync(["src/index.css", "src/index.jpg", "src/index.js"]).then(res => {
    console.log(res)
}).catch(() => {
    console.log("路径错误")
})