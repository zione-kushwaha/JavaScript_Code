const score = 400;
console.log(score)      // 400
console.log(typeof score)  //type is number

let balance = new Number('400')  // if you  pass the number then also you get the number
console.log(balance)// 400 
console.log(typeof balance)   // type is object

// precision in js
 const othernumber= 123.23599
 console.log(othernumber.toPrecision(4))// 123.2

 console.log(othernumber.toFixed(2))

 // no. of the zeros in the indian and us standard 
 const hundred= 10000000000
 console.log(hundred.toLocaleString())  // this is us standard 
 console.log(hundred.toLocaleString('en-in'))  // this is indian standard

 //++++++++++++++++++++++++++++++++  Math   ++++++++++++++++++++++++++++++++++++++

 console.log(Math)    //Object [Math] {}

 console.log(Math.abs(-4))
 console.log(Math.floor(43.7))
 console.log(Math.round(45.5))     // upper value is taken
 console.log(Math.round(4.6))
 console.log(Math.min(2,3,4,5))

 // uses of the random
console.log(Math.random())// generates random number between 0 to 1

// let's try to get the number between  0 to 10
console.log((10*Math.random()).toFixed(0)) // working fine

// let's try to get the number between  1 to 6
console.log(Math.floor(Math.random()*(6-1+1)+1))

