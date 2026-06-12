class Userr{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const toffee = new Userr("toffee", "toffee@gmail.com", "123456")

console.log(toffee.encryptPassword());
console.log(toffee.changeUsername());

// behind the scene

//function User(username, email, password){
  //  this.username = username;
    //this.email = email;
    //this.password = password
//}

//User.prototype.encryptPassword = function(){
  //  return `${this.password}abc`
//}
//User.prototype.changeUsername = function(){
  //  return `${this.username.toUpperCase()}`
//}


//const coffee = new User("coffee", "coffee@gmail.com", "123321")

//console.log(coffee.encryptPassword());
//console.log(coffee.changeUsername());