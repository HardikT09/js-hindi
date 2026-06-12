class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new Teacher("tea", "tea@teacher.com", "1723")

tea.logMe()
const coldCoffee = new User("coldCoffee")

coldCoffee.logMe()

console.log(tea instanceof User);