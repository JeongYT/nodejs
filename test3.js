// test3.js
var calc={}
calc.add=function(a,b){
    return a+b;
}
console.log("모듈분리전 : " + calc.add(10,20));