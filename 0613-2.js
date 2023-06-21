var fs=require("fs");

// 여러파일을 동기적으로 읽기
const a=fs.readFileSync('a.txt','utf-8');
const b=fs.readFileSync('b.txt','utf-8');
const c=fs.readFileSync('c.txt','utf-8');
console.log(a,b,c);

// 여러파일을 비동기적으로 읽기
const async=require("async");
async.parallel([
    (callback)=>{fs.readFile('a.txt','utf-8', callback)},
    (callback)=>{fs.readFile('b.txt','utf-8', callback)},
    (callback)=>{fs.readFile('c.txt','utf-8', callback)},
], (err,result)=>{
    console.log(result.toString());
});
// npm install async    npm i async

// 콜백지옥
fs.readFile('a.txt',(err,A)=>{
    fs.readFile('b.txt',(err,B)=>{
        fs.readFile('c.txt',(err,C)=>{
            console.log(A.toString());
            console.log(B.toString());
            console.log(C.toString());
        });
    });
});