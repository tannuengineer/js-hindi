let score="33"
console.log(typeof(score))
console.log(typeof score)

// string to number conversion
 let valueInNumber=Number(score)
 console.log(typeof valueInNumber)

 let number= "123abc"
 console.log(typeof number) // string
//   conversion
let convertedValue=Number(number) // string
console.log(typeof convertedValue) // number
console.log(convertedValue) // NaN

/*

"33"=> 33
"33abcd"=>NaN
true=>1 and false=>0
""=> false
"tannu"=>true


*/

let val= 34;
let negVal=-val
console.log(negVal) // -34
console.log(typeof negVal) //Number

let str1="TANNU"
let str2="CHAUHAN"
let str3= str1+str2
console.log(str3) // TANNU CHAUHAN

console.log(1+2)// 3
console.log(1+"2") // 12
console.log("1"+"2") // 12
console.log("1"+2)// 12
console.log("1"+2+2)// 122
console.log(1+2+"3") // 33

console.log(true)// true
console.log(+true) //1
// console.log(true+)//error
console.log(+"")//0

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/*
++value= value phle add hogi phir used hogi => prefix
value++= value phle used hogi phir baad me add hogi =>postfix 

*/
console.log("test")

