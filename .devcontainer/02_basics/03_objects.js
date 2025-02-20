// singleton
// object.create

// objects literals

const Jsuser = {
    name: "Arfan",
    "Full name": "Shawon",
    age: 23,
    location: "RAK",
    email: "arfan@google.com",
    
    idLogged: false,
    lastLoggedDays: ["Monday", "Sunday"]

}


// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["Full name"]);

// Object.freeze(Jsuser)

 Jsuser.email = "shawon@gamil.com"
// console.log(Jsuser["email"]);

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("hello js user");
    
}
Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


