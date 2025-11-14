let cont = document.querySelector(".container img");

let love = document.querySelector(".container i");

cont.addEventListener("dblclick", function () {
  love.style.transform = `translate(-50%, -50%) scale(1)`;
  love.style.opacity = 0.8;
  love.style.color = "red";

  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    
    love.style.transform = `translate(-50%, -50%) scale(0)`;
  }, 1500);
});
