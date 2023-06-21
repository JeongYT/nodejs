// 통신상에 주고 받는 데이터전송형식
// CSV, XML, JSON
var out="";
out+="이순신 50살 IT프로그래머\n";
out+="강감찬 30살 HTML프로그래머\n";
out+="홍길동 20살 CSS프로그래머\n";
out+="홍길순 10살 JAVA프로그래머\n";

console.log(out);

out=out.split("\n");
console.log(out);
for(var i=0; i<out.length; i++){
    out[i]=out[i].split(",");
    for(var j=0; j<out[i].length; j++){
        out[i][j]=out[i][j].trim();
    }
}
console.log(out);