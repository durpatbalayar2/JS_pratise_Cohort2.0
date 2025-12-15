// Design Pattern 
//  2. Reavling Module Pattern - Same fnc ko different name se return kar skte hai

let userAmt = (function () {
  let balance = 15000; // private variable

  function balanceAmt() {
    console.log(balance);
  }

  function depositeAmt(amount) {
    balance += amount;

    console.log(balance);
  }

  function withdrawAmt(amount) {
    balance -= amount;
    console.log(balance);
  }

  return {
    balance: balanceAmt,
    deposit: depositeAmt,
    draw: withdrawAmt,
  };
})();
