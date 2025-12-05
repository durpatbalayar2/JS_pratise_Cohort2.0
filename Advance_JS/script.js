// Opps Pratise

// Private Variable - Concept of encapsulation

class Account {
  #balance; // private variable

  constructor(name, initialAmt, deposit) {
    this.name = name;
    this.#balance = initialAmt;
  }

  withdraw(amount) {
    if (this.#balance >= amount) {
      return (this.#balance -= amount);
    } else {
      console.log("Insufficient balance");
    }
  }

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let ac1 = new Account("Ram", 5000);

ac1.deposit(1000);

console.log(ac1);
