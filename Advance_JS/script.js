// default import

import Greet from "./app.js";
console.log(Greet("Ram")); // Hello Ram

// While importing a default export, any name we can give

import Hey from "./app.js";
console.log(Hey("Sita")); // Hello Sita

// name import

import { add } from "./app.js";
console.log(add(2, 3)); //5

//While importing a named export , we can change its name using the as keyword

import { add as sum } from "./app.js";
console.log(sum(5, 6)); //11
