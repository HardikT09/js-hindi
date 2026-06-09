const name = "Hardik"
const repoCount = 50

//console.log(name + repoCount + " Value" + " count");

//console.log(`Hello my Name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Hardik-kh')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newStringOne = "  hardik  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hardik.com/hardik%20takkar"
url.replace('%20','-')

console.log(url.replace('%20','-'));

console.log(url.includes('hardik'))

console.log(gameName.split('i'));




