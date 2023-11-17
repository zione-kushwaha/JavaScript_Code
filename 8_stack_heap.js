/*          --------> stack (primitive)
            --------> Heap (non primitive)              

*/
// let's see the examples of the primitive datatypes in the js
let name='jeevan'
let anotherName= name;
anotherName='raone'
console.log(name)//----------->jeevan
console.log(anotherName)//------------>raone
// from this example it is clear that in the primitive datatype memory is not assigned as refrence

// but in the case of the non - primitive memory is assigned as refrence
//let's see for the refrence type example

let obj1={
    name:'jeevan',
    email:'jeevan@google.com'
}
let obj2=obj1
obj2.name='zione'
console.log(obj1)
console.log(obj2)