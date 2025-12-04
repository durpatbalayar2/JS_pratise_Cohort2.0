// SECTION 1: Objects and OOPS Thinking (Foundation)
// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.
// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.
// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// Solution

//1.
let obj = {
  name: "Sushil",
  email: "test@gmail.com",
  loginIn: function () {
    console.log("User logged in");
  },
};

obj.loginIn();

//2. If i have a 5 user then i will create different 5 obj to handle 5 user

let user1 = {
  name: "Sushil",
  email: "test@gmail.com",
  loginIn: function () {
    console.log("User1 logged in");
  },
};
let user2 = {
  name: "Ram",
  email: "test@gmail.com",
  loginIn: function () {
    console.log("User2 logged in");
  },
};

let user3 = {
  name: "Sushil",
  email: "test@gmail.com",
  loginIn: function () {
    console.log("User3 logged in");
  },
};

user1.loginIn();
user2.loginIn();

//  Using class

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log("user logged in");
  }
}

let u1 = new User("Ram", "test@gmail.com")
let u2 = new User("Sita", "test@gmail.com");

//3.Create a product object that stores name and price and has a method which returns the final price after discount.

let product = {
  name: "Iphone",
  price: 100000,

  discountAmt: function () {
    return this.price - 2500;
  },
};

console.log(product.discountAmt());
