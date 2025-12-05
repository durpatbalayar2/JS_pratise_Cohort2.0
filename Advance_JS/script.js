// Opps Pratise

// Inheritance Pratise

class Animal {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  eat() {
    console.log(this.name + "eats food");
  }
}

class Dog extends Animal {
  constructor(name, price, breed) {
    super(name, price);

    this.breed = breed;
  }
  bark() {
    console.log(
      this.name + " Sound too much  and it is a  " + this.breed + "breed"
    );
  }
}

d1 = new Dog("Tommy", 1200, "Germen Soffered");
