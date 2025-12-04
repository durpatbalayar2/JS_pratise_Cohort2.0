// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.

// Solution

//7.
class Student {
  constructor(name, rollno) {
    this.name = name;
    this.rollno = rollno;
  }

  introduce() {
    return this.name + " - " + this.rollno;
  }
}
let S1 = new Student("Hari", "12");



// 8.If we remove this, JavaScript will not set values inside the object.
//  The values remain local to the constructor and the object will not have 
// those properties, so accessing them results in undefined.

//9.

let obj1 = {
  fnc: function () {
    console.log(this);
  },
};

obj1.fnc()  // obj return


let obj2 = {
  fnc:  ()=> {
    console.log(this);
  },
};

obj2.fnc()  // window return


