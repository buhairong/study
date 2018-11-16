var fs = require("fs");

var rs = fs.createReadStream("hello4.txt");

var ws = fs.createWriteStream("hello3.txt");

rs.pipe(ws);