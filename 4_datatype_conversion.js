//------ conversion of string type to number---------
let score ='33'
console.log(typeof score)// type string

score = Number(score)
console.log(typeof score) // type number

let anohter_score='33a'
console.log(typeof Number(anohter_score))   //type number but when we print the number then
console.log(Number(anohter_score))//------NaN

//let's convert the null to the object number type
 console.log(Number(null))    // 0
 console.log(Number(undefined))   // NaN

 //<--------------------------------------------------------------->

// datatype conversion of the boolean
 console.log(Number(true))
 console.log(Number(false))

 console.log(Boolean(1))   //true
 console.log(Boolean(37))  // true
 console.log(Boolean(0))   // false
 console.log(Boolean(-9))   // true

console.log(Boolean('jeevan'))    // true
console.log(Boolean(''))          // false
//-------------------------------------------------------------------

let someNumber =33 
let stringNumber = String(someNumber)
console.log(typeof stringNumber)          // string

// conversion of the null and undefine to the string 
console.log( typeof String(null))
console.log(typeof String(undefined))