var str = "Hello Atguigu";

//将一个字符串保存到buffer中
var buf = Buffer.from(str);
console.log(buf);

//创建一个10个字节的buffer
var buf2 = Buffer.alloc(10);
buf2[0] = 88;
buf2[1] = 0xaa;
console.log(buf2);
//控制台和页面输出是10进制
console.log(buf2[1]);
console.log(buf2[1].toString(16));

var buf3 = Buffer.from('我是一段文本数据');
console.log(buf3.toString());