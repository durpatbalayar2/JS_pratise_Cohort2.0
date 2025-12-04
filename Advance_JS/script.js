// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.

// Solution

// bina class ke bhi constructor function banta hai
// es6 se pahele constructor aise banta tha

//10.

function User(val) {
  this.name = val;

  //11.

  // constructor inside prototye
  //   this.login = function(){
  //     console.log("User login")
  //   }
}

//11.
//Oustide the constructor - shared memory

User.prototype.logIn = function () {
  console.log("User login");
};

let u1 = new User("Ram");

let u2 = new User("Gopal");

//12.

console.log(u1.logIn === u2.logIn);
 // true
//Because when the method is placed inside the prototype, every object (u1 and u2) points to the same function in shared prototype memory. Therefore, they are equal.

//If the method were inside the constructor, it would print false because each object would have its own separate copy.
