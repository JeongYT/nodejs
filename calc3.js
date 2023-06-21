// calc3.js
var util=require("util");
var EventEmitter=require("events").EventEmitter;

// EventEmitter를 상속하면 emit과 on 메소드 사용가능

var Calc=function(){
    var self=this;
    this.on("stop",function(){
        console.log("Calc에 stop event 전달됨");
    });
};
util.inherits(Calc,EventEmitter); // Calc가 EventEmitter 상속

Calc.prototype.add=function(a,b){
    return a+b;
}

module.exports=Calc;
module.exports.title="계산기";

