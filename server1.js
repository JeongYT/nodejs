// 모듈을 추출한다.
var http=require('http');
var express=require("express");
// 웹서버를 생성 , 서버 애플리케이션 객체 생성
var app=express();
// 요청이 왔을때 실행할 함수
app.use(function(req,res,next){
    console.log("클라이언트 요청이 왔습니다.");
    // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    // res.write("<!DOCTYPE html>");
    // res.write("<html>");
    // res.write("<head>");
    // res.write("<title>응답페이지</title>");
    // res.write("</head>");
    // res.write("<body>");
    // res.write("<h1>안녕하세요 서버로부터 응답이 왔습니다.</h1>");
    // res.write("</body>");
    req.text="이순신";
    req.age=30;
    next();
    // res.end();
});
app.use(function(req,res){

    res.send("<h2>" + req.text + ":" + req.age + "</h2>");
});

// listen() 서버를 실행한다.
http.createServer(app).listen(52273,function(){
    console.log("Server Running at http://127.0.0.1:52273");
});
