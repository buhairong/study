/*
    简单文件写入
    fs.writeFile(file, data[, options], callback)
    fs.writeFileSync(file, data[, options])
    file:文件路径
    data:写入文件的数据
    options:选项，对写入进行设置
        r 读取文件 , 文件不存在则出现异常
        r+ 读写文件 , 文件不存在则出现异常
        rs 在同步模式下打开文件用于读取
        rs+ 在同步模式下打开文件用于读写
        w 打开文件用于写操作 , 如果不存在则创建，如果存在则截断
        wx 打开文件用于写操作, 如果存在则打开失败
        w+ 打开文件用于读写, 如果不存在则创建, 如果存在则截断
        wx+ 打开文件用于读写, 如果存在则打开失败
        a 打开文件用于追加, 如果不存在则创建
        ax 打开文件用于追加, 如果路径存在则失败
        a+ 打开文件进行读取和追加, 如果不存在则创建该文件
        ax+ 打开文件进行读取和追加,如果路径存在则失败
*/

var fs = require("fs");

fs.writeFile("hello3.txt","这是通过简单文件写入的内容",{flag:"a"},function(err){
    if(!err){
        console.log("写入成功");
    }
})