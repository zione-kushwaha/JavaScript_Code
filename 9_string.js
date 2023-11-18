const name='jeevan'
const repoCount=50
console.log(name+` ${repoCount}`)

// also 
console.log(`${name} has repo count ${repoCount}`)

// another methord of the deleration of the string 
let gameName=new String('G-game')
console.log(typeof gameName)// object

console.log(gameName[0])//g
console.log(gameName.length)//6

console.log(gameName.toUpperCase())
console.log(gameName.indexOf('g'))//2
console.log(gameName.charAt(2))
const newstring=gameName.substring(0,4)//in this 4th index is neglected
console.log(newstring)
console.log(gameName)
const anohter_string=gameName.slice(-8,4)
console.log(anohter_string)
console.log(gameName)
let anohter_strings=gameName.split(0,3)
console.log(gameName)
console.log(anohter_strings)

console.log(gameName.__proto__)

const new_string=gameName.substring(1,5)
console.log(new_string)


//uses of the trim  in the string
let email='     jeevan@google.com   '
console.log(email)// here the space is not neglected

console.log(email.trim())// now the space is neglected using the trim function


// replace function in js
const url='https:jeevan/%20/market.com'
console.log(url.replace('%20','amu'))// here the %20 is replace by the amu 

//split function in js
 const constant='jeevan-kumar-kushwaha'
 console.log(constant.split('-'))// this function split the constant about the '-'
                                  // and gives the array  of the string