// Tyoe anotatoins 

let age :number = 38;
let myName : string = "Moiz";
let isActive :boolean = true;

// type interface kya karta ha ka ap ko auto type assig kr deta ha  for e.g
let user = "ali" // user ko auto string ki type assign kar di ts na 
// lakin aagr hm yah ab user ko number denga tu eror agya ga 
// user = 1213 // error

// alia is type object 
let student = {
name : "AbduL Moiz",
age : 18,
rollNo : 123,
}
// student.email = "abc@gmail.com" // eror 


// interface 

interface Data {
    name : string,
    age :number,
    rollNo : number,
    email : string
}
let studentData : Data ={
    name : "Yazdan ali mirza",
    age : 12,
    rollNo : 123,
    email : "abc@gmail.com"
}
console.log(studentData);

// ===============================
// Tuples in TypeScript (Fixed-Length Array)
// =============================== not much used array concept

let user1: [number, string, number, string, boolean] = [
    0, "Admin", 1, "User", true
];

console.log(user1);

// ===============================
// Union & Intersection Types
// ===============================


// ✅ Union Type: Allowing multiple types
let userIdentity:string | number | boolean;
userIdentity = "ALi";
userIdentity = 2;
userIdentity = true

// ===============================
// Intersection Type (Combining Two Interfaces)
// ===============================

interface Person {
    name : string,
    age : number
}

interface info {
    email : string
    isActive : boolean
}

let usercompletedata : Person &  info = {
    name : "Abdul Moiz",
    age : 18,
    email : "abc@gmail.com",
    isActive : true
// if i miss any of them ts wuill gie errror 
} 
