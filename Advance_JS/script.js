// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.

// solution

//13.

function abcd(a, b, c) {
  console.log(this.name, a, b, c);
}

//14.

let obj = {
  name: "Sushil",
};

// call()
abcd.call(obj, 1, 2, 3);

// apply()

abcd.apply(obj, [1, 2, 3]);

// bind() -> does NOT execute immediately — it returns a new copy of the function, and then you call it separately.

let newfnc = abcd.bind(obj, 1, 2, 3);
newfnc();

//15. borrow method using call

let obj1 = {
  name: "Karan",
  sayHello: function () {
    console.log("Hello" + this.name);
  },
};

let obj2 = {
  name: " Gita",
};

obj1.sayHello.call(obj2);
