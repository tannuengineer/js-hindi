// singleton object

const { json } = require("express/lib/response")

const mySym =Symbol("key1")
const JsUser ={
        name:"Hitesh",
        age:18,
        [mySym]:"myKey1",
        location:"sisana",
        email:"hitesh@google.com",
        isLoggedIn:false,
        lastLoginDays:["Monday","Saturday"]

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof(mySym))

JsUser.email ="hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
console.log(JsUser);//change krege to koi error ni aayega bas change ni hoga kyuki jsuser ko freeze krdia hai



JsUser.greeting =function(){
    console.log("Hello Js user")
}
console.log(JsUser.greeting()) 

JsUser.greetingTwo =function(){
    console.log(`Hello js user, ${this.name}`)
}
console.log(JsUser.greetingTwo())
