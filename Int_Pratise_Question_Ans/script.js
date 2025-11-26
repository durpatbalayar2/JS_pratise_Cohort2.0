// //Day -2 DSA with JS

// //1.Generate the otp

// console.log(Math.floor(Math.random()*9000)+1000);

// // Conditionals Statements Question

// //1. Accept two numbers and print the greatest between them

// let prompt = require("prompt-sync")();

// let n1 = +prompt("Enter the first number");
// let n2 = +prompt("Enter the seecond number");
// if (n1 > n2) console.log(n1 + "is greater");
// else console.log(n2 + "is greater");

// //2.Accept an integer and check whether it is an even number or odd

// let prompt = require("prompt-sync")();

// let num = Number(prompt("Enter the number"))

// if (num%2 === 0) console.log("Even")
//  else console.log("Odd");

// //3. Accept name  and age from the user . Check if the user's is a valid voter or not

// let prompt = require("prompt-sync")();

// let name = prompt ("Enter your name")
// let age = +prompt("Enter your age")

// if(age > 18 ){
//     console.log(`${name} you can vote`);

// }else{
//     console.log(`${name} you are  not  eligible for vote`);

// }


// // 4. Accept three number and print the greatest among them

// let prompt = require("prompt-sync")();

// let a = +prompt("Enter the fast number");
// let b = +prompt("enter the second number");
// let c = +prompt("Enter the third number");

// if (a>b){
//     if (a>c){
//         console.log(a + "is greater")
//     }else{
//         console.log( c + "is greater")
//     }

// }else{
//     if(b>c){
//         console.log(b + " is greater")
//     }else{
//         console.log( c + "is greater")
//     }
// }

// // Short
// console.log(Math.max(a, b, c));


// //Q. 5  leap year -> 366 days
// //  #️⃣Leap Year Rules
// // 🔸Year 4 se divisible ho leap year ho sakta hai
// // 🔸Agar wo year 100 se divisible hai, toh wo leap year nahi hota
// // 🔸Lekin agar wo year 400 se bhi divisible ho, tab leap year ban jaata hai

// let prompt = require("prompt-sync")();

// let year = +prompt("Enter a year: ");

// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//   console.log("Leap Year");
// } else {
//   console.log("Not a Leap Year");
// }


// //Q.6 Discount amount
// //case1: Amount 0 - 5000 -> 0% discount
// //case2:Amount 50001 - 7000 -> 5% discount
// //case3: Amount 7001 - 9000 -> 10% Discount
// //case4: amount More 9000 -> 20%

// let prompt = require("prompt-sync")();
// let amount = +prompt("Enter the amount:  ");
// let dis = 0;
// if (amount > 0 && amount < 5000) dis = 0;
// else if (amount > 5000 && amount < 7000) dis = 5;
// else if (amount > 7000 && amount < 9000) dis = 10;
// else dis = 20;
// console.log("Payable amount :" + (amount - (dis * amount) / 100));


// // 7. Current Bill
// // Case1: Unit 0 - 100 -> 4.2 Rs./unit
// // Case2: Unit 101 -200 -> 6 Rs./unit
// // Case3: unit 201 -400 -> 8 Rs./unit
// // Case4: unit more than 400 -> Rs.13/unit

// // Top to bottom approach
// let prompt = require("prompt-sync")();
// let unit = +prompt("Enter the units: ");

// let price = 0;

// if (unit > 0 && unit <= 100) console.log(unit * 4.2);
// else if (unit > 100 && unit <= 200) {
//   console.log(100 * 4.2 + (unit - 100) * 6);
// }
// else if (unit >200 && unit <=400){
//     console.log((100*4.2)+ (100*6)+ (unit-200) *8 )
// }else{
//     console.log((100*4.2)+(100*6)+(200*8)+(unit - 400)*13)
// }

// //Bottom-up approach
// let prompt = require("prompt-sync")();
// let unit = +prompt("Enter the units: ");
// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }
// if (unit > 200 && unit <= 400) {
//   amount = amount + (unit - 200) * 8;
//   unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//   amount = amount + (unit - 100) * 6;
//   unit = 100;
// }

// amount = amount + unit * 4.2;

// console.log(amount);

// // 8 . Counting number of days in a given month of a year

// let prompt = require("prompt-sync")();
// let month = +prompt("Enter the month: ");
// let year = +prompt("Enter the year: ");

// let days = 0;
// if (month == 2) {
//   if (year % 400 == 0 || (year % 4 == 0) & (year % 100 != 0)) {
//     days = 29;
//   } else days = 28;
// } else if (
//   month == 1 ||
//   month == 3 ||
//   month == 5 ||
//   month == 7 ||
//   month == 8 ||
//   month == 10 ||
//   month == 12
// ) {
//   days = 31;
// } else {
//   days = 30;
// }

// console.log(days);
