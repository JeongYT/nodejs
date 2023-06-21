// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
//웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

// ajax 요청시 다중서버 접속 지원
var cors=require('cors');
app.use(cors());

app.post('/user', function(request, response) {
    var name = request.param('user_name');
    response.send(name);
});

app.get("/parameter",function(request,response){
   var name=request.query.name;
   var region=request.query.region;

   response.send(`<h1>${name} : ${region}</h1>`);
});

var items=[
    {name:'우유', price:200},
    {name:'홍차', price:300},
    {name:'커피', price:500}
];

app.all('/data.html',function(request,response){
    var out="";
    items.forEach(function(item){
        out+="<div>";
        out+="<span>" + item.name + " : " + item.price + "원 </span>";
        out+="</div>"
    });
    response.send(out);
});

// 전체조회
app.get('/products',(req,res)=>{
    res.send(items);
});

// 데이터 추가
app.post('/products',(req,res)=>{
    // res.send(items);
    var name=req.body.name || req.query.name;
    var price=req.body.price || req.query.price;
    var item={
        name:name,
        price:price
    }
    items.push(item);
    res.send({
        message:"데이터를 추가했습니다.",
        data:item
    });
});

// 데이터 수정
app.put('/products/:id',function(req,res){
    var id=Number(req.param('id'));
    var name=req.body.name;
    var price=req.body.price;

    if(items[id]){
        items[id].name=name;
        items[id].price=price;
    
        res.send({
            message:"데이터를 수정했습니다.",
            data:items[id]
        });
    }else{
        res.send({
            error:"존재하지 않는 데이터입니다."
        });
    }
});

// 데이터 삭제
app.delete('/products/:id',function(req,res){
    if(isNaN(id)){
        res.send({
            error:"숫자를 입력하세요"
        })
    }else if(items[id]){
        var id = Number(req.param('id'));
        items.splice(id,1);
        res.send({
            message:"데이터를 삭제했습니다."
        });
    }else{
        res.send({
            error:"존재하지 않는 데이터입니다."
        })
    }
    
});






// // 개별데이터 조회
// app.get('/products/:id',(req,res)=>{
//     // var id=req.query.id;
//     var id=Number(req.params.id);
//     if(isNaN(id)){
//         res.send({error:"숫자를 입력해주세요"});
//     }else if(items[id]){
//         res.send(items[id]);
//     }else{
//         res.send({error:"존재하지 않는 아이디입니다"});
//     }
// });

// 웹 서버를 실행합니다.
http.createServer(app).listen(52275, function() {
    console.log("server Running at http://127.0.0.1:52275");
});
// npm install express@3.4.7