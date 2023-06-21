console.log("welcome nodejs");
// node.js에서 자바스크립트 실습하기
var age=20;
console.log('나이 : %d', age);
var name="소녀시대";
console.log('이름 : %s', name);
var Person={}
Person['age']=20;
Person['name']="소녀시대";
Person.mobile="010-4000-1000";
console.log("전화 : %s",Person['mobile']);
function add(a,b){
    return a+b;
}
var result=add(10,20);
console.log("더하기 : %d", result);
Person.mul=function(a,b){
    return a*b;
}
console.log("곱하기 : %d", Person.mul(9,9));

var Person2={
    age:20,
    name:"우주시대",
    minus:function(a,b){
        return a-b;
    }
}
console.log("빼기 : %d", Person2.minus(2,100));

var Users=[
    {name:'소녀시대',age:20},
    {name:'걸스데이',age:22}
];
console.log("사용자수 : %d",Users.length);
console.log("첫번째 사용자 : %s",Users[0].name);
Users.push({name:'핑클', age:40});
console.dir(Users); // dir -> 객체가 들어간경우
console.log(Users); 

Users.push(add); // add함수를 배열에 추가하기
console.log(Users);
console.log("배열에 추가된 함수 : " + Users[3](10,30));

// 배열의 원소하나씩 확인하기
for(var i=0; i<Users.length; i++){
    console.log(`${i} : ${Users[i].name}`);
}
// 함수는 제외하고 출력하기
for(var i=0; i<Users.length; i++){
    if(!(Users[i].name=='add'))
    console.log(`${i} : ${Users[i].name}`);
}
for(var i in Users){
    console.log(`${i} : ${Users[i].name}`);
}
Users.forEach(function(item,index){
    console.log(`${index} : ${item.name}`);
});
console.log(Object.keys(Users));
console.log(Users.pop());
console.log(Users);
Users.unshift({name:"티아라", age:55}); // 배열앞에 추가하기
// push() 배열의 뒤에 추가하기
// pop() 배열의 뒤에 요소 제거하기
// shift() 배열의 앞에 요소 제거하기
console.log(Users);
Users.shift();
console.log(Users);
Users.splice(1,0,{name:"애프터스쿨",age:25});
// splice(1,0) index 1에 추가하기
console.log(Users);
Users.splice(2,1); // index 2인 요소 삭제하기
console.log(Users);

// slice()
Users.splice(1,0,{name:"애프터스쿨",age:25});
console.log(Users);
var User2=Users.slice(1,3); // index 1에서 index3 앞의 2까지 추출
console.log(User2);
var User2=Users.slice(1); // index 1 이후의 모든 요소 추출
console.log(User2);