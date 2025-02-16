//Array, Object, Function

// const heros = ["john wick", "wingston", "Poo"]

// let myObj = {
//     name: "Arfan",
//     age: 22,
// }

// const myFunction = function () 
//     console.log("hello world");
    
// }

// console.log(typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non- Primitive)


let myFullName = "Arfan Bhuiyan"

let anothrName = myFullName



anothrName = "Shawon"
console.log(myFullName);
console.log(anothrName);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "arfan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

