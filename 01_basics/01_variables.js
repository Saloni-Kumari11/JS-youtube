const accountId = 144553
let accountEmail = "saloni@gmail.com"
var accountpassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId =2 //not allowed
accountEmail = "sk@sk.com"
accountpassword = "21212121"
accountCity = "Benguluru"

console.log(accountId);
/* prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountpassword,accountCity,accountState]);

