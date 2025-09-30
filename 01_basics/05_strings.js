const name = "saloni"
const repoCount = 50
//console.log(name + repoCount + " Value");

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('saloni-sk-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)// -ve values are allowed
console.log(anotherString);

const newStringOne = "  saloni  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://saloni.com/saloni%20kumari"
console.log(url.replace('%20','-'));
console.log(url.includes('sal'));
console.log(gameName.split('-'));

