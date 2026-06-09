const myArr = [1 ,2 ,3 ,4, 5]
const myHeros = ["shaktiman","naagraj"]

const myArr2= new Array(1, 2, 3, 4)

//console.log(myArr[0]);
//console.log(myArr[3]);

//myArr.push(6)
//myArr.push(8)
//myArr.pop()


//myArr.unshift(9) //adds the element to last
//myArr.shift() //removes the first element

//console.log(myArr.includes(9));

const newArr = myArr.join()

//console.log(newArr);
//console.log(myArr)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1, 3) //cuts that part from the array permanently
console.log("c ",myArr);
console.log(myn2);









