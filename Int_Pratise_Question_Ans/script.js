//DSA Day3 Loops - do...while loop

let prompt = require("prompt-sync")();

//1. Guess a number

// let computer = Math.floor(Math.random() * 100) + 1;
// let user;
// let attempt = 0;
// let maxAttempt = 10;

// do {
//   if (attempt === 0) {
//     user = Number(prompt("Enter a number between 1 and 100: "));
//   } else {
//     user = Number(
//       prompt(`Try again (Attempts left: ${maxAttempt - attempt}): `)
//     );
//   }

//   // validate user number before counting attempt
//   if (user < 1 || user > 100) {
//     console.log(" Invalid input! Please enter a valid number 1-100.");
//     continue;
//   }

//   attempt++;

//   if (user > computer) console.log("Too large number");
//   else if (user < computer) console.log("Too small number");
//   else if (user == computer) {
//     console.log(
//       `Congratulations🎉👏. You successfully guessed the number in ${attempt}attempt`
//     );
//     break;
//   } else {
//     console.log("Invalid input");
//     break;
//   }

//   if (attempt == maxAttempt) {
//     console.log("Game Over! You have used all attempts.");
//     console.log(`The correct number was: ${computer}`);
//     break;
//   }
// } while (user != computer);

//2. Small calculator

// let n;

// do {
//   console.log("Enter 1 : Addition");
//   console.log("Enter 2 : Subtraction");
//   console.log("Enter 3 : Multiplication");
//   console.log("Enter 4 : Devision");
//   n = +prompt("Enter a number: ");

//   switch (n) {
//     case 1: {
//       let a = +prompt("Enter first number");
//       let b = +prompt("Enter second number");
//       console.log(`Sum : ${a} + ${b} = ${a + b}`);
//       break;
//     }

//     case 2: {
//       let a = +prompt("Enter first number");
//       let b = +prompt("Enter second number");
//       console.log(`Subtraction : ${a} - ${b} = ${a - b}`);
//       break;
//     }
//     case 3: {
//       let a = +prompt("Enter first number");
//       let b = +prompt("Enter second number");
//       console.log(`Multiple : ${a} * ${b} = ${a * b}`);
//       break;
//     }

//     case 4: {
//       let a = +prompt("Enter first number");
//       let b = +prompt("Enter second number");
//       console.log(`Division : ${a} / ${b} = ${a / b}`);
//       break;
//     }

//     default:
//       console.log("Invalid input");
//   }

//   n = +prompt("Do you want to contine ? Enter10:   ");
// } while (n == 10);

//3. Resturant Order Food

let key;
let total = 0;

do {
  console.log("*******************");
  console.log("Food Menu");
  console.log("*******************");
  console.log("Enter-1: North-Indian Food Items");
  console.log("Enter-2: South-Indian Food Items");
  console.log("Enter-3: Chinese Food Items");
  console.log("Enter-0 : Exit");

  key = +prompt("Enter the number:");

  switch (key) {
    case 1: {
      console.log("1.Dal -Rs.80");
      console.log("2.Rice -Rs.100");
      console.log("3.Vegetable -Rs.60");

      let n_item = +prompt("Choose your items: ");
      if (n_item == 1) total += 80;
      else if (n_item == 2) total += 100;
      else if (n_item == 1) total += 60;
      else console.log("Invalid item");
      break;
    }
    case 2: {
      console.log("1.Sambar -Rs.50");
      console.log("2.Idly -Rs.100");
      console.log("3.Dosa -Rs.120");
      let s_item = +prompt("Choose your items");
      if (s_item == 1) total += 50;
      else if (s_item == 2) total += 100;
      else if (s_item == 3) total += 120;
      else console.log("Invalid Item");
      break;
    }
    case 3: {
      console.log("1.Chicken Noodle -Rs.70 ");
      console.log("2.Momo -Rs.100");
      console.log("3.Manchurin -Rs.50");

      let c_item = +prompt("Choose your item");

      if (c_item == 1) total += 70;
      else if (c_item == 2) total += 100;
      else if (c_item == 3) total += 50;
      else console.log("Invalid Item");
      break;
    }

    case 0: {
      console.log("Thank you for visiting us !");
      break;
    }

    default:
      console.log("Wrong Entry");
  }

  if (key === 0) break;

  let order = prompt("Do you want to order more? (yes/no): ").toLowerCase();
  if (order !== "yes") break;
} while (true);

if (key !== 0) {
  console.log(`Final Bill is Rs.${total}`);
  console.log("Have a nice day 😊🙏");
} else if (isNaN(key)) {
  console.log("Enter a valid number ");
} else {
  console.log("Have a nice day 😊🙏");
}
