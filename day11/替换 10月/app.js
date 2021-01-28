const fs = require("fs");
class ReplaceHtml {
    constructor(opt) {
        // 合并参数
        Object.assign(this, opt);
        // 初始化
        this.init()
    }
    readFile(url) {
        return new Promise((resolve, reject) => {
            fs.readFile(url, "utf8", (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(data)
            })
        })
    }
    // 异步函数
    async init() {
        // 等待读取html
        let html = await this.readFile(this.html);
        // 等待读取js
        let js = await this.readFile(this.js);
        // 等待读取css
        let css = await this.readFile(this.css[0]) + await this.readFile(this.css[1]);
        // 替换
        let res = html.replace("<!--injection style-->",`<style>${css}</style>`)
            .replace("<!--injection script-->",`<script>${js}</script>`)
        // 写入
        fs.writeFileSync("build.html",res)
    }
}



new ReplaceHtml({
    html: "src/index.html",
    css: ["src/static/css/common.css", "src/static/css/style.css"],
    js: "src/static/js/index.js"
});