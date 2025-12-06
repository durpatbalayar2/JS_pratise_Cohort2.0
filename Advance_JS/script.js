// Call back function

//1.
function abcd(name, fnc) {
  let nm = name;
  fnc(nm); // passing parameter received from function call
}

abcd("Hari", function (val) {
  console.log(val);
});

//2.

function sum(a, b, fnc) {
  let res = a + b;

  fnc(res);
}

sum(1, 2, function (result) {
  console.log(result);
});
