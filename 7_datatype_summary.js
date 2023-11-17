/*                There are two types of the data types in JS
      
 1. primitive types ------> 7 types ----->a.string, b.number, c.boolean , d. null, 
                              e.undefined, f.symbol, g. bigint

2. Refrence types (non primitive)-------> a. array, b. objects, c.functions

*/

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)//false
// this conclude that symbol is assigned different

const heros=['saktiman','powerRanges','Ryukendo','NaagRaj']
let obj={
    name:'jeevan',
    age:20,
    nickName:'lili'
}
console.log(typeof heros)//object
console.log(typeof obj)//object

// let's check for the function
const myfunction=function(){
    console.log('hellow jeevan')
}
myfunction()
console.log(typeof myfunction)   //function

//datatype of the myfunction is object function
