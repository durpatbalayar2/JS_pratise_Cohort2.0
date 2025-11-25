//Day1 - DSA with JS

//1. Diff b/w let ,var ,const

// const -> cannot be re-declare & re-assign
// let -> cannot be re-declare but can be re-assign
// var -> Both re- declaration and re-assign possible

//2. Sum of two integer

let a = 10;
let b = 20;

console.log(10 + 20); //30

//3. Relation b/w integer and string

string + string  --> string(concat)
str + int --> string ( concat)
int + int --> int (arithmetic)

let a = 10;
let b = 20;
console.log("The sum of " + a + "and" + b + "=" + a + b); //  1020 (concat is going)

console.log("The sum of " + a + "and" + b + "=" + (a + b)); // 30

//4. Type coercion : Converting one type of data into another data type

console.log("5" + 2); // "52" since '+' have two works concat + airthmetic operation
console.log("5"-2) // 3  since '-' have only one work i.e. subtract

//5. install npm i prompt-sync
let prompt = require('prompt-sync')()
let age = +prompt("Enter the age")
console.log(`Age ${age}`)
console.log(typeof(age))

//By default prompt give int type data
//+prompt , Number(prompt()), parseInt(prompt()) -> convert string type to number

//6. Swap two variable value

let a = 20;
let b = 30;

let temp = a;
a = b;
b = temp;
console.log(a)
console.log(b)
