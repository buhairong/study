var fs = require("fs");

var rs = fs.createReadStream("hello3.txt");

var ws = fs.createWriteStream("hello3.txt");

rs.once("open",function(){
    console.log("可读流打开了");
})

rs.once("close",function(){
    console.log("可读流关闭了");
    ws.end();
})

ws.once("open",function(){
    console.log("可写流打开了");
})

ws.once("close",function(){
    console.log("可写流关闭了");
})

rs.on("data",function(data){
    console.log(data.toString());
    ws.write(data);
})