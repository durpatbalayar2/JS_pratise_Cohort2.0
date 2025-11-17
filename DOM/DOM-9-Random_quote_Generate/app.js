let main = document.querySelector("main");
let btn = document.querySelector("button");

let arr = [
  "Honesty is the Best policy.",
  "Pratise makes a man perfect",
  "Once time gone never come back",
  "Education is Most Powerful Weapon",
  "Belive in God and His Plan",
  "Take Respect and Give respect",
];

btn.addEventListener("click", function () {
  let a = Math.floor(Math.random() * arr.length);

  var x = Math.floor(Math.random() * 80);
  var y = Math.floor(Math.random() * 80);
  var rot = Math.floor(Math.random() * 366);
  var scl = Math.floor(Math.random() * 3);

  let h1 = document.createElement("h1");

  h1.style.position = "absolute";
  h1.style.left = x + "%";
  h1.style.top = y + "%";
  h1.style.rotate = rot + "deg";
  h1.style.scale = scl;

  h1.innerHTML = arr[a];

  main.append(h1);
});
