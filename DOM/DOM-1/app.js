let h5 = document.querySelector("h5");
let btn = document.querySelector("button");

let flag = false;
btn.addEventListener("click", function () {
  if (flag == false) {
    h5.textContent = "Nisha Sharma";
    h5.style.color = "blue";
    btn.textContent = "Remove Friend";
    btn.style.backgroundColor = "black";
    btn.style.color = "white";

    flag = true;
  } else {
    h5.textContent = "Stranger";
    h5.style.color = "Red";
    btn.textContent = "Add Friend";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";

    flag = false;
  }
});
