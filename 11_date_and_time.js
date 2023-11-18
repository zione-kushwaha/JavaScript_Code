//javaScript date represents a single movement in time an a plat-form independent format

let mydate= new Date()
console.log(mydate)   // gives the date present
console.log(typeof mydate)   // its type is object

console.log(mydate.toString())  //Sat Nov 18 2023 09:51:19 GMT+0545 (Nepal Time)
// little bit nice format we get after using the string

console.log(mydate.getFullYear())
console.log(mydate.toLocaleDateString())

// time stamp
let mytimeStamp=Date.now()
console.log(mytimeStamp)

console.log(mydate.toLocaleDateString('default',{
    weekday:'long'
}))
