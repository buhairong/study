var fs = require("fs");

fs.open("hello2.txt","w",function(err,fd){//err:错误对象 fd:文件描述符
    if(!err){
        fs.write(fd,"这是异步写入的内容",function(err){
            if(!err){
                console.log("写入成功");
            }

            fs.close(fd,function(err){
                if(!err){
                    console.log("文件已关闭");
                }
            });
        })
    }else{
        console.log(err);
    }
});