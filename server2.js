var http=require('http');
var express=require("express");
var app=express();
app.use(express.static('public')); // 시작폴더를 지정


app.use(app.router);

// 라우트처리
app.all("/a",function(req,res){
    res.send("<h1>Page A.......</h1>");
});
app.all("/b",function(req,res){
    res.send("<h1>Page B.......</h1>");
});
app.all("/c",function(req,res){
    res.send("<h1>Page C.......</h1>");
});
app.use(function(req,res){
    res.send("<h1>잘못 들어오신것 같은데요..</h1>");
});


http.createServer(app).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
});
