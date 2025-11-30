//DSA Day5 -> Arrays Question

// Searching Algorithim

//1.Linear Search
//2.Binary Search

//Linear Search

let arr = [12, 2, 3, 4, 5, 6, 7, 8, 10];
let t = 8;
let index = -1; // Store garna

for (let i = 0; i < arr.length; i++) {
  if (arr[i] == t) {
    //found case
    index = i;
    break;
  }
}

console.log(index == -1 ? "not found" : "Found at " + index + " index");

//Binary Search - sorted array

let prompt = require("prompt-sync")();
let arr = [10, 20, 30, 40, 50, 60, 70];
let t = +prompt("Enter a value you want to search: ");
let start = 0; //starting index
let end = arr.length - 1; // ending index
let indexFound = -1; // -1 is not found case

while (start <= end) {
  let mid = Math.floor((start + end) / 2); // find the mid

  if (arr[mid] == t) {
    indexFound = mid; // found

    break;
  } else if (t < arr[mid]) {
    // left side go
    end = mid - 1;
  } else {
    start = mid + 1; //right side
  }
}

console.log(
  indexFound == -1
    ? "Your searched element is not found "
    : "Your searched element " + t + " found at " + indexFound + " index"
);
