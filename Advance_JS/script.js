// Design Pattern

//Module Pattern

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
    balanceAmt,
    depositeAmt,
    withdrawAmt,
  };
})();
