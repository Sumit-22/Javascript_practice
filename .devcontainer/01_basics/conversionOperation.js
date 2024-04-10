let score = "33"

console.log(typeof score)
console.log(typeof (score))

let valueNumber =Number(score)

console.log(typeof (valueNumber))
let score1 = "33abc" //if it's null ,print 0 ,if true then 1 and false then 0 , if any string, then NaN
let valueNumber1 =Number(score1)

console.log(valueNumber)  //prints NaN
console.log(typeof (valueNumber1))  //number

let isLoggedIn =1 // then true ,0 then false , "" then false and any string then true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)


let score2 = 33
console.log(typeof (score2))

let StringNumber =String(score2)

console.log(StringNumber); 
console.log(typeof (StringNumber));  
//************************************************* Operations **************************************
let value = 3
let negValue = -value
console.log(negValue);
console.log(2+2);

//console.log(2+2);
//console.log(2-2);
//console.log(2*2);
//console.log(2/2);
//console.log(2**2);
//console.log(2%3);
 
let str1="hello"
let str2=" hitesh"
console.log(str1+str2)

console.log("1"+2); //12 //consult    https://tc39.es/ecma262/#sec-toprimitive
console.log("1"+2+2); //122
console.log(1+"2") //12
console.log(1+2+"2") //32
console.log("1"+"2") //12

// tricky conversion(not use in real life)
console.log(+true); //1 and we get error in case of console.log(true+); 
//0 if console.log(+"");

let num1,num2,num3
//we don' generally use
num1=num2=num3=2+2

//prefix and postfix
//consult https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

