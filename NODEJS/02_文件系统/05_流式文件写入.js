var fs = require("fs");

/*
    fs.createWriteStream(path[,option])
    path:文件路径
    option:配置的参数
*/

var ws = fs.createWriteStream("hello4.txt");

ws.once("open",function(){
    console.log("流打开了");
})

ws.once("close",function(){
    console.log("流关闭了");
})

ws.write("通过可写流写入文件的内容");
ws.write("通过可写流写入文件的内容");

ws.end();