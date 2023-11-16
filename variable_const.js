const accountId=14435
let email='zionekushwaha@google.com'
let password=1234
var name='jivan'
accountCity='kalaiya'

// accountId=2343
// console.log(accountId)---------------> this gives error since const can't be modified
 
/*using at the end ";" is optional 
we should write the code in clear and orginised nature 
*/
email='jivankushwaha@google.com'// this is accepted since this email is variable

//similarly for the accountCity ----using let is optional but it is recommended

console.table([email,accountId,password,accountCity])

/*prefer not to use var because of issue in block scope and functional scope */