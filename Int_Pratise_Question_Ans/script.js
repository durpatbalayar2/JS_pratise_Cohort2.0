//Day -3 DSA with JS

// Switch Case

// 1. Program to count the number of vowels and consonant in a given string

let prompt = require("prompt-sync")();
let str = prompt("Enter the string: ");

str = str.toLowerCase();

let vowels = 0,
  consonant = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i]; // charAt(i) <-- Both same

  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      vowels++;
      break;

    default:
      consonant++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonat:", consonant);

//2 . Program to calculate area of circle , rectangle , triangle using switch.
let prompt = require("prompt-sync")();
let choice = +prompt(
  "Enter your choice number 1.circle, 2.rectangle, 3.triangle area:"
);

switch (choice) {
  case 1:
    let r = +prompt("Enter the radius: ");
    console.log("Area of circle:", Math.trunc(Math.PI * r * r));
    break;

  case 2:
    let l = +prompt("Enter the length: ");
    let b = +prompt("Enter the breadth: ");
    console.log("Area of rectangle:", l * b);
    break;

  case 3:
    let base = +prompt("Enter the base: ");
    let h = +prompt("Enter the height: ");
    console.log("Area of triangle:", (base * h) / 2);
    break;

  default:
    console.log("Invalid Input");
}
