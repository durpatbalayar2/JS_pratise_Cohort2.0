//DSA Day3 Loops - while loop

let prompt = require("prompt-sync")();

// 1. Reverse the number

let n = +prompt("Enter the number: ");

let rev = 0;
while (n > 0) {
  let rem = n % 10;
  rev = rev * 10 + rem;
  n = Math.floor(n / 10);
}
console.log(rev);

//2. Count the number of digit and sum of digit.

let n = +prompt("Enter the number: ");
let count = 0;
let sum = 0;
while (n > 0) {
  count++;
  let digit = n%10;
  sum+=digit;
  n = Math.floor(n / 10);
}
console.log(count, sum);

//3. Check the ISBN is valid or invalid

//Step1. Verify either the given ISBN is 10 digit or not
//Step2. Use logic

let n = +prompt("Enter the number: ");

let copy = n;
let count = 0;
while (n > 0) {
  count++;
  n = Math.floor(n / 10);
}
console.log(count);

if (count != 10) console.log("Invalid ISBN");
else {
  let ans = 0;

  while (copy > 0) {
    let dig = copy % 10;
    ans = ans + dig * count;

    count--;
    copy = Math.floor(copy / 10);
  }
  console.log(ans);

  console.log(ans % 11 == 0 ? "Valid ISBM" : "Invalid - ISBN");
}

//3. Check automorphic number

// Those number whose given number and   sqrt.of given  last number match then it is automorphic.

// 5 -> 5^2=25 Here given no. 5 and 25 last number same so it is automorphic if not match not .

let n = +prompt("Enter the number: "); //76
let copy = n; //76
let sq = n * n; //5776
let count = 0;

while (n > 0) {
  count++;
  n = Math.floor(n / 10);
}

console.log(count); //2

if (sq % Math.pow(10, count) == copy) {
  console.log(copy, "is Automorphic number");
} else console.log(copy, "is not Automorphic number");
