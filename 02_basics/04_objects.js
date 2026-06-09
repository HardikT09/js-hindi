//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Hardik"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email:"someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Hardik",
            lastname: "Takkar"
        }
    }
}

//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "hardik@gmail.com"
    },
    {
        id: 1,
        email: "hardik@gmail.com"
    },
    {
        id: 1,
        email: "hardik@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));
//console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename:"Javascript",
    price:"999",
    courseInstructor: "Binmile"
}

//course.courseInstructor

const {courseInstructor: instructor } = course //replaced with instructor

//console.log(courseInstructor);
console.log(instructor);

//API (JSON)
{
    "name":"Hardik",
    "coursename":"Js in hindi"
    "price": "free"
}

