const http = require("http");
const fs = require("fs");
const path = require("path");

const chatHtmlFile = fs.readFileSync(path.join(__dirname, "static", "chat.html"));
const styleCssFile = fs.readFileSync(path.join(__dirname, "static", "style.css"));
const chatJsFile = fs.readFileSync(path.join(__dirname, "static", "script.js"));

const server = http.creatServser((req, res) => {

})
const server = http.createServer((req, res) => {
    if (req.method == "GET") {
        switch (req.url) {
            case "/": return res.end(chatHtmlFile);
            case "/style.css": return res.end(styleCssFile);
            case "/script.js": return res.end(scriptJsFile);
        }
    }

    return res.end("Error 404");
})
server.listen(3000);