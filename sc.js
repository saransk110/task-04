var obj1={name:"person1",age:5}
var obj2={age:5,name:"person1"}
var s1=JSON.stringify(obj1);
var s2=JSON.stringify(obj2);
if(s2===s2){
console.log("true");
}
else{
console.log("false");
}