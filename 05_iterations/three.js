const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    //console.log(`each char is ${greet}`);    
}

// maps   (unique values not duplicated)

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States America")
map.set('FR', "France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

