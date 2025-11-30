// //DSA Day4 -> Arrays

//1. Printing array from user

let prompt = require("prompt-sync")();
let n = +prompt("Enter the size of array: ");
let arr = new Array(n);
for (let i = 0; i < arr.length; i++) {
  arr[i] = +prompt("enter a value : ");
}
console.log(arr); //[ 23, 34, 32, 34, 45 ]





//2. Sum of array's  element

let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
}
console.log(sum);


//3.Max element from array
let arr = [10, 20, 30, 40, 50];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);





//4. Find the second max element
let arr = [10, 20, 30, 40, 50];
let max = Math.max(arr[0], arr[1]);
let sMax = Math.min(arr[0], arr[1]);

for (let i = 2; i < arr.length; i++) {
  if (arr[i] > max) {
    sMax = max;
    max = arr[i];
  } else if (arr[i] > sMax && arr[i] != max) {
    sMax = arr[i];
  }
}
console.log(sMax);





//5. Reverse the array
let arr = [10, 20, 30, 40, 50];
let i = 0,
  j = arr.length - 1;
while (i < j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  i++;
  j--;
}
console.log(arr);



//6. All zeores to left and all ones to right side
let arr1 = [1, 1, 0, 1, 1, 0, 1, 0, 1];

let i = 0,
  j = 0;

while (i < arr1.length) {
  if (arr1[i] == 0) {
    let temp = arr1[i];
    arr1[i] = arr1[j];
    arr1[j] = temp;
    j++;
  }
  i++;
}
console.log(arr1);



//7. Move the negative element to left and positive to right side

let arr = [1, -1, 2, -4, 5, 0, 6, -5, 3, -2, 4, -3, -5, 7];
let i = 0,
  j = 0;
while (i < arr.length) {
  if (arr[i] < 0) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j++;
  }
  i++;
}
console.log(arr);


//8. Right rotation by 1
let arr = [1, 2, 3, 4, 5];
let temp = arr[arr.length - 1];
for (let i = arr.length - 2; i >=0; i--) {
  arr[i + 1] = arr[i];
}
arr[0] = temp;
console.log(arr);  


// 9.Rotation of array k times left
let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
for (j = 0; j < k; j++) {  //outer loop for repeat of k time
  let temp = arr[0];
  for (let i = 0; i < arr.length - 1; i++) { // inner loop rotate element in left by 1
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
}
console.log(arr);


//10.Rotation of array k times in right side
let arr = [1, 2, 3, 4, 5];
let k = 2;
k = k % arr.length;
for (let j = 0; j < k; j++) {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i > 0; i--) {
    arr[i ] = arr[i-1];
  }
  arr[0] = temp;
}
console.log(arr);
