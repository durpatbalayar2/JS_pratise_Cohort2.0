//DSA Day6 -> Arrays Question

// Sorting Algorithim

//1.Bubble Sort
//2.Selection Sort
//3.Insertion Sort

//Bubble Sort

let arr = [5, 3, 8, 4, 2];
let n = arr.length; // 5
for (let i = 0; i < n - 1; i++) {
  // loop for pass

  for (let j = 0; j < n - 1 - i; j++) {
    // Operation

    if (arr[j] > arr[j + 1]) {
      //swap

      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr);


// Selection Sort
let arr = [5, 3, 8, 4, 2];
let n = arr.length; // 5

for (let i = 0; i < n - 1; i++) {
  let min = i;

  for (let j = i + 1; j < n; j++) {
    if (arr[j] < arr[min]) min = j;
  }

  if (min != i) {
    let temp = arr[min];
    arr[min] = arr[i];

    arr[i] = temp;
  }
}
console.log(arr);



//Insertion Sort
let arr = [5, 3, 8, 4, 2];
let n = arr.length; // 5

for (let i = 1; i < n; i++) {
  let key = arr[i];

  let j = i - 1;

  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }

  arr[j + 1] = key;
}

console.log(arr);
