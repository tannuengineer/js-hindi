const  name="tannu"
const repoCount= 50

console.log(name + repoCount +"value"); //tannu50 value =>outdated
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //called as string interpolation

const getName= new String('hiteshhc')

console.log(getName[0]);//h
console.log(getName.__proto__); // getName ka parent (prototype) kya hai?

console.log(getName.length);//8
console.log(getName.toUpperCase());//HITEST
console.log(getName.charAt(2));//t
console.log(getName.indexOf('t'));//2

const newstring =getName.substring(0,4);//hite
console.log(newstring);

const anotherStr= getName.slice(-8,4) //ite
console.log(anotherStr)

const newStringone="    hitesh    "
console.log(newStringone.trim())// remove whitespaces

const url="www.google.%20chauhancom"
console.log(url.replace('%20','--')) 
console.log(url.includes('chauhan'))//true
