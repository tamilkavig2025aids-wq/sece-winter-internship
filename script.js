var x=10;
var x=20; //redeclaration

let a=30
a=50  //reassign

const b=40;
console.log(x);
console.log(a);
console.log(b);

let c = 30;
c="hello";
console.log(typeof c); // javascript is a dynamically typed datatype we dont need to declare the data type

let d = 22
{
    let d=30
}    // block scope
console.log(d);

let obj={
    name:"test", 
    age: 40
}
let obj2=obj
obj2.age=33
console.log(obj.age);

let num=30;
let num2=num;
num2=40;
console.log(num);

console.log(5==='5');//checks both datatype and value
console.log(5=='5');//checks only the value

//normal function
function add(a,b){
    return a+b;
}function sub(a,b){
    return a-b;
}function mul(a,b){
    return a*b;
}
console.log(add(99,100))

//arrow function
const add1=(a,b,c)=>{
    return a+b+c;
}
console.log(add1(40,50,60))
const add2 = (a,b,c)=>a+b+c//without curlybraces
console.log(add2(1,2,3));

//callback
const cal=(a,b,callback)=>{
    return callback(a,b)
}
console.log(cal(9,19,sub));
console.log(cal(10,100,mul));

//  map
let arr = [1,2,3,4,5]
const doubledArr=arr.map((n)=>n*2)
console.log(doubledArr);

//with {}
let arr1 = [1,2,3,4,5]
const doubledArr1=arr1.map((n)=>{ return n*2})
console.log(doubledArr1);

//map with objects
let details=[
    {name:'A', age:18, marks:99},
    {name:'B', age:24, marks:89},
    {name:'C', age:30, marks:59},
    {name:'D', age:20, marks:69}
]
const nameList=details.map((detail)=>detail.name)
console.log(nameList);
const ageList=details.map((detail)=>detail.age)
console.log(ageList);

//filter
const evenNum=arr.filter((n)=>n%2==0)
console.log(evenNum);
//filter
const marks=details.filter((details)=>details.marks<70)
console.log(marks);
//find
const findmarks=details.find((details)=>details.marks<70)
console.log(findmarks);
//reduce
const reduceArr = arr.reduce((total,n)=>{return total+n},0)
console.log(reduceArr);
//if we put 10 in the place of 0 it also adds the number 10 and the ouput will be 25

let name = "kavi";
let mark = 60;
console.log(`I am ${name} have scored ${mark}`)

