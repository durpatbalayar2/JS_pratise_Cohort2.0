// Level -2

//11.  Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → 'Account locked'

// for (let attempt = 1; attempt <= 3; attempt++) {
//   let input = prompt(`Enter the password (Attempt ${attempt} of 3)`);

//   if (input === null) {
//     console.error("You cancel it");
//     break;
//   }

//   input = input.trim();

//   if (input === "") {
//     console.warn("Empty string. please enter password");
//   } else if (!isNaN(input)) {
//     console.warn(`Number are not allowed . Entered input is ${input}`);
//   } else if (input === "durpat") {
//     alert("Successfully login");
//     console.log("Welcome to my page ");
//     break;
//   } else {
//     console.error("Wrong Password. Please try again");
//   }

//   if (attempt === 3) {
//     console.warn(
//       "You account has been locked. Contact with the support team to unlock it 🙏 "
//     );
//   }
// }

// //Harsh Bhaiya Explanation

// //Attempt 3 times

// let attempt = 0;

// let sahipass = "durpat";

// let userpass = prompt("Enter your password:");

// attempt++;

// while (attempt < 3 && sahipass !== userpass) {
//   if (attempt === 3) break;
//   userpass = prompt("Enter your password:");
//   attempt++;
// }

// if (attempt === 3 && sahipass !== userpass) {
//   console.error("Account locked");
// } else {
//   console.log("Welcome");
// }

//12. Ask user for words until they type “stop”. Count how many times they typed “yes”
//Loop until "stop" is typed. Count "yes".

// let count = 0;

// while (true) {
//   let input = prompt("Enter the word.");
//   if (input === "stop") break;

//   if (input === "yes") count++;
// }
// console.log(`total count are : ${count}`);

// Class live

// let word = prompt("word bolo")
// let count = 0;
// while(word!== "stop"){
//     if(word === "stop") break;
//     if(word === "yes") count++;
// }
// console.log(`total count are : ${count}`);

//13.Print numbers divisible by 7 from 1 to 50

// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// 14.Sum of all odd numbers from 1 to 30 .Add only odd numbers. Print final sum.

// let sum = 0;

// console.log("Odd number are:");

// for (let i = 1; i <= 30; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//     console.log(i);
//   }
// }

// console.log(`Sum of all odd no. = ${sum}`);

// 15.Keep asking number until user enters an even number
//Use while loop. Stop only if input is even.

// while (true) {
//   let num = +prompt("Enter a number");

//   if (num % 2 === 0) {
//     console.log(`even number- ${num}`);
//     break;
//   } else {
//     console.log("Odd number");
//   }
// }

//16.Print numbers between two user inputs
//Input start and end using prompt() → print all between.

// let start = +prompt("Enter the start");
// let end = +prompt("Enter the end ");

// if (start > end) console.error("Please enter the number again");

// for (let i = start; i <= end; i++) {
//   console.log(i);
// }

//17. Print only first 3 odd numbers from 1 to 20

// start - 1
//end - 20

// odd num -> not divisible by 2

// let count = 0;

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//     count++;
//   }

//   if (count === 3) break;
// }

//Ask user 5 numbers. Count how many are positive
//Use loop + condition + counter.

// let totalCount = 0;
// let positiveCount = 0;

// while (totalCount !== 5) {
//   let num = +prompt("Enter the number:");
//   totalCount++;

//   if (num > 0) positiveCount++;
// }
// console.log(`Total positive number are ${positiveCount}`);

// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

// let balance = 1000; // given amt
// let counter = 0; // max - 3 withdraw
// let flag = false; // Insufficent AMt

// let totalWithdraw = 0;

// while (balance > 0 && counter !== 3) {
//   let withdrawAMt = +prompt("Enter the amount :");
//   counter++;

//   if (withdrawAMt <= balance) {
//     balance -= withdrawAMt;
//     totalWithdraw += withdrawAMt;
//   } else {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) {
//   console.log(" You donot have sufficient amount to withdraw");
// }

// console.log(
//   `Total withdraw amount is ${totalWithdraw} and Remaining balance is ${balance}`
// );

// let balanceAmt = 1000;

// for (let i = 1; i <= 3; i++) {
//   let withdraw = +prompt("Enter the withdraw amount");

//   if (withdraw > balanceAmt) {
//     console.log("Insufficent Amt");
//     break;
//   }

//   if (withdraw <= balanceAmt) {
//     balanceAmt = balanceAmt - withdraw;
//   }
// }

// console.log(`Balance : ${balanceAmt}`);
