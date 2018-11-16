/*
* 同步文件的写入
*       手动操作的步骤
*       1.打开文件
*           fs.openSync(path,flags[,mode])
*            path:文件路径
*            flags:打开文件要做的操作的类型
*                   r:只读
*                   w:可写的
*            mode:设置文件的操作权限
*          返回值：返回一个文件的描述符
*       2.向文件中写入内容
*           fs.writeSync(fd,string[,position[,encoding]])
*              fd 文件的描述符
*              string:要写入的内容
*              position:写入的起始位置
*              encoding:写入的编码 默认utf-8
*       3保存并关闭文件
*           fs.closeSync(fd)
*/

var fs = require("fs");

var fd = fs.openSync("hello.txt","w");

fs.writeSync(fd,"今天天气真不错");

fs.closeSync(fd);