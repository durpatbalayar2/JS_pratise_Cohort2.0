// Design Pattern
//  2. Factory Module Pattern - Ek normal fnc use karke naye objs create kiye jaate hai, bina new keyword wor constructor use kiye

function createUser(name, age) {
  return {
    name: name,
    age: age,
    greet() {
      return `Hi i am ${name} and I am ${age}years  old. `;
    },
  };
}

// without using new keyword  we can easily create mulitiple objs
let user1 = createUser("Ram", 25);
let user2 = createUser("Sita", 22);

console.log(user1.greet());
console.log(user2.greet());
