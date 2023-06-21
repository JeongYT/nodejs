// 노드의 기본기능알아보기
// 주소문자열과 요청파라미터
// 이벤트다루기
// 파일다루기
// 포그파일남기기?
// url 모듈
// parse()  주소문자열을 URL객체로
// format()  URL객체를 주소문자열로

var url=require("url");
// var curURL=url.parse("https://news.naver.com/main/ranking/popularDay.naver?mid=etc&sid1=111");
// console.log(curURL);
// var curStr=url.format(curURL);
// console.log(curStr);

// queryString 모듈
// parse() 요청파라미터문자열을 파라미터객체로
// stringify() 파라미터객체를 문자열로
var curURL=url.parse("https://n.news.naver.com/article/056/0011503115?ntype=RANKING");

var curStr=url.format(curURL);

var querystring=require("querystring");
var param=querystring.parse(curURL.query);
console.log(param.query);
console.log(querystring.stringify(param));

// 이벤트 보내고 받기
// 비동기방ㅇ식으로 데이터를 한쪽에서 다른쪽으로 전달한다.
// emit으로 보내고 다른쪽에서 리스너를 등록해서 on으로 받는다.

process.on("exit",function(){
    console.log("exit 이벤트 발생함");
});
setTimeout(function(){
    console.log("2초 뒤에 시스템 종료시도함");
    process.exit();
},2000);

var Calc=require("./calc3");
var calc=new Calc();
calc.emit("stop");
console.log(Calc.title+"에 이벤트 전달함");

console.log(calc.add(5,5));