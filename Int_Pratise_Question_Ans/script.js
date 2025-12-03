//DSA Day7 -> Arrays Question

//Black Swap reverse algo.(Left rotation by 1)

let arr = [1, 2, 3, 4, 5];
let k = 3;
k = k % arr.length;
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);
console.log(arr);
function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

// Black Swap reverse algo.(Right rotation by 1)
let arr = [1, 2, 3, 4, 5];
let k = 1;
k = k % arr.length;

reverse(0, arr.length - 1);
reverse(0, k-1)
reverse(k,arr.length-1)
console.log(arr);
function reverse(i, j) {
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
}

// Remove dublicate from the sorted array
let arr = [0,0,1,1,1,2,2,3];
let j = 1;
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] != arr[i + 1]) {
    arr[j] = arr[i + 1];
    j++;
  }
}

console.log(arr.slice(0, j));
