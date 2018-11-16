var fs = require("fs");

/*
    fs.existsSync(path)
    检查一个文件是否存在
*/

var isExists = fs.existsSync("hello2.txt");
console.log(isExists);

/*
    fs.stat(path, callback)
    fs.statSync(path)
    获取文件的状态
*/

/*fs.stat("hello2.txt",function(err,stats){
    console.log(stats.size);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
})*/


/*
    fs.unlink(path, callback)
    fs.unlinkSync(path)
    删除文件
*/
//fs.unlinkSync("hello.txt");

/*
    fs.readdir(path[, options], callback)
    fs.readdirSync(path[, options])
    读取一个目录的目录结构
*/

fs.readdir(".",function(err,files){
    if(!err){
        console.log(files);
    }
})

/*
    fs.truncate(path, len, callback)
    fs.truncateSync(path, len)
    截断文件,将文件修改为指定的大小
*/
//fs.truncateSync("hello2.txt",10);

/*
    fs.mkdir(path[, mode], callback)
    fs.mkdirSync(path[, mode])
    创建一个目录
*/
//fs.mkdir("hello");

/*
    fs.rmdir(path, callback)
    fs.rmdirSync(path)
    删除目录
*/
//fs.rmdirSync("hello");

/*
    fs.rename(oldPath, newPath, callback)
    fs.renameSync(oldPath, newPath)
    对文件进行重命名
*/
/*
fs.rename("hello2.txt","hello22.txt",function(err){
    if(!err){
        console.log("修改成功");
    }
});
*/

/*
    fs.watchFile(filename[, options], listener)
    监视文件的修改
*/
fs.watchFile("hello3.txt",{interval:1000},function(curr,prev){
    console.log("文件发生变化了");
})


