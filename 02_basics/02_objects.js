// const tinderUser = new Object()

const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name ="sammy"
tinderUser.isLoggedIn =false

console.log(tinderUser)

const regularUser ={
    email: "some@gmail.com",
    fullName: {
        userFullname:{
            firstname:"tannu" ,
            lastname:"chauhan"
        }
    }
}
// console.log(regularUser.fullName.userFullname.firstname)
const Object1 ={1: "a",2: "b"}
const Object2 ={3: "a",4: "b"}

// const Object3={Object1,Object2}
const object3 =Object.assign({} ,Object1,Object2);
console.log(object3)

/*
const obj3 = Object.assign({}, Object1, Object2)

👉 Result:

New object banega ✅
Original Object1 safe rahega ✅
*/
const object4 ={...Object1, ...Object2}
console.log(object4)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
