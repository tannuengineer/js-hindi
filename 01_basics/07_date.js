let myDate = new Date()
console.log(myDate.toString());//Sat Apr 11 2026 16:04:49 GMT+0000 (Coordinated Universal Time
console.log(myDate.toDateString());//Sat Apr 11 2026
console.log(myDate.toLocaleDateString());//4/11/2026
console.log(typeof myDate); //object


let myCreateDate = new Date(2023,0,23); // jan 23 2023
console.log(myCreateDate.toDateString());//Mon Jan 23 2023
console.log(myCreateDate.toLocaleDateString());//23/1/2023 

let myCreateDates = new Date("2023-01-14")
console.log(myCreateDates.toLocaleDateString())//1/14/2023 , 12:00:00 AM

let myTimeStamp= Date.now()
console.log(myTimeStamp) 

let mydate = new Date(2023-4-11)
console.log(mydate)//full date object
console.log(mydate.getMonth());//0-11
console.log(mydate.getDay());//0-6
console.log(mydate.getFullYear());//2026

mydate.toLocaleDateString('default',{
    weekday: "long"})

    mydate.toLocaleDateString('hi-IN', { weekday: "long" })
