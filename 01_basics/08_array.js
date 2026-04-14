let arr =[1,2,3,4,5,6]
console.log(arr);
console.log(arr[0]);
console.log(arr.includes(9))//false
console.log(arr.indexOf(9))//-1

arr.push(7)// add element to the last in an array
console.log(arr)

arr.pop()// remove last element from the array
console.log(arr)

arr.unshift(9)// add element at the first index in an array
console.log(arr)

arr.shift()//Removes the first element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
console.log(arr)

const newArr= arr.join()
console.log(arr)
console.log(newArr);
console.log(typeof newArr);


//********diff btw slice and splice ******/


console.log("A ",arr );

const myn1 =arr.slice(1,3)
console.log(myn1)
console.log("B ",arr)

const myn2 =arr.splice(1,3)
console.log("C ",arr)
console.log(myn2);
// console.log("C ",arr)

const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros =["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//flash
// concat and ..... vala same print krega add krke
marvel_heros.concat(dc_heros);
console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

const all_new_heros =[...marvel_heros,...dc_heros]//spread operator
console.log(all_new_heros)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array= another_array.flat(Infinity)
console.log(real_another_array)

let score1= 100
let score2= 200
let score3 =300
console.log(Array.of(score1, score2,score3))
console.log(Array.from("hitesh"))




