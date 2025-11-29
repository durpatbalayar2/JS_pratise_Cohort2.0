//DSA Day4 -> Pattern Programming

let prompt = require("prompt-sync")();

let n = +prompt("Enter a number: ");

// 1. V-pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 2 * n - 1; j++) {
    if (j == i || i + j == 2 * n) process.stdout.write("*");
    else process.stdout.write(" ");
  }

  console.log();
}

//2. X-Pattern

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j || j + i == n + 1) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}

//3.  Inverted Right angle traingle

//    *
//   **
//  ***
// ****
//*****

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write("  ");
  }
  for (let j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

//4. Right angle triangle
// *****
// ****
// ***
// **
// *

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    process.stdout.write("* ");
  }
  console.log();
}

//5.
//A
//A B
//A B C
//A B C D
//A B C D E

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(String.fromCharCode(65 + j - 1 )+ " ");
  }
  console.log();
}

//6.

//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}

// 7.

// 1 2 3 4 5
// 2 3 4 5
// 3 4 5
// 4 5
// 5

for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    process.stdout.write(j + " ");
  }
  console.log();
}
