var fs=require('fs');
fs.writeFileSync('notes.txt','this file is created by node js!');
fs.appendFileSync('notes.txt',' appended');
