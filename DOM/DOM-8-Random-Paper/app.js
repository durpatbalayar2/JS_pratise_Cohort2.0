let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", function () {
  let div = document.createElement("div");

  var x = Math.random() * 100;
  var y = Math.random() * 100;
  var c1 = Math.floor(Math.random() * 256);
  var c2 = Math.floor(Math.random() * 256);
  var c3 = Math.floor(Math.random() * 256);

  var val =Math.floor( Math.random() * 366);

  div.style.height = "50px";
  div.style.width = "50px";
  div.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
  div.style.position = "absolute";

  div.style.left = x + "%";
  div.style.top = y + "%";
  div.style.rotate= val+"deg";

  main.appendChild(div);
});
