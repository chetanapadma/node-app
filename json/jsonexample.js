var fs=require('fs');
console.log(JSON.stringify({"ji":'ji'}))
var readbuffer=fs.readFileSync('json/1.json');
bufferData=readbuffer.toString();
console.log(bufferData,'title')
var data=JSON.parse(bufferData)
console.log(data.name,'title')