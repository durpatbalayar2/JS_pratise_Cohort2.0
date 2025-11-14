// // Loops level-1 Questions

// // 1. Print number from 1 to 10

// for (let i= 1; i<=10; i++){
//     console.log(i);
// }

//  //2. Print only even number from 1 to 20

// console.log("Even number are:");
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // //3. Print number from 10 to 1

// for (let i = 10; i>0; i--){
//     console.log(i);
// }

//  // 4. Print the word "yes " five times.

// for (let i = 1; i <= 5; i++) {
//   console.log("yes");
// }

// //5. Print whether number from 1 to 10 are even or odd .

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even - ${i}`);
//   } else {
//     console.log(`Odd- ${i}`);
//   }
// }

// //6. Ask user for number and say if it's positive or negative.

// let num = +prompt("Enter the number:");   // + -> convert string no. to integer number

// if (num >= 0) {
//   console.log("positive");
// } else {
//   console.log("Negative");
// }

// // Note: When we enter any number to prompt , then it gives a string number .
// //Even though due to type coercion , here string number automatically converting string number to real number

// // But for industrial best pratise and safe code :
// // We should manually convert this string no. to real number by-

// // + prompt()
// //Number()
// //parseInt()

// //7. if age >= 18->"Eligible to vote " else -> "Not eligible to vote"

// let input = prompt("Enter your age");

// if (input === null) {
//   console.error("You click the cancel button.");
// } else {
//   input = input.trim(); // remove all spaces

//   if (input === "") {
//     // compare with empty string
//     console.warn("Please enter the value.");
//   } else if (isNaN(input)) {
//     // check either the given number is  number or not
//     console.error("It is not a number ");
//   } else {
//     let age = Number(input); // convert string number to real number

//     if (age >= 18) {
//       console.log("You are eligible for vote.");
//     } else {
//       console.log("You are not eligible for vote.");
//     }
//   }
// }

// // 8. Print multiplication table of 5.

// for (let i = 1; i <= 10; i++) {
//   console.log(`5 * ${i} = ${5 * i}`);
// }

// //9. Count how many numbers b/w 1 and 15 are greater than 8 .

// let count = 0;

// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//   }
// }

// console.log(count); //7

// // 10.Ask user for password and print access status
// // Hardcoded correct password.Compare with user input

// let input = prompt("Enter your password");

// if (input === null) {
//   console.log("User cancel");
// } else {
//   input = input.trim();

//   if (input === "") {
//     console.log("Nothing is there");
//   } else if (!isNaN(input)) {
//     console.error("Number are not allowed");
//   } else if (input === "durpat") {
//     console.log("Acess granted!");
//   } else {
//     console.warn("wrong password");
//   }
// }
