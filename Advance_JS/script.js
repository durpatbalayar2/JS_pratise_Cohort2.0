// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?

// Solution
//4.
class Car {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  drive() {
    return this.brand + "- " + this.speed;
  }
}
let c1 = new Car("Toyata", "120");

//5.

let c2 = new Car("Thar", "180");

//6 Ans:-If classes did not exist, we would need to manually create separate objects for every car with its own properties and methods. We would repeat the same code again and again. When the project becomes large, it will be hard to manage and update. If we want to change something in the drive function, we must update it in every object, which causes duplication and increases the chance of errors. Classes help us reuse the same structure and make the code clean and maintainable.

let car1 = {
  brand: "Toyata",
  speed: 120,
  drive: function () {
    return this.brand + " -" + this.speed;
  },
};

console.log(car1.drive())
