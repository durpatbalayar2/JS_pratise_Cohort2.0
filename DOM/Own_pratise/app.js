let input = document.querySelector("input");

let span = document.querySelector("span");

input.addEventListener("input", function () {
  let left = 20 - input.value.length ;

  span.textContent = left;

  if (left <0){
    span.style.color = "red"
    input.style.backgroundColor= "yellow"
  }else{
    span.style.color = "white"
    input.style.backgroundColor = "white";
  }
});
