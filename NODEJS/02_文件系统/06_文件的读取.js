//简单文件读取

var fs = require("fs");

fs.readFile("hello4.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
});