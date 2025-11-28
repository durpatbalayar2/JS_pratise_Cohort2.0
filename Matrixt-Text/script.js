const p = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = p.textContent;
let count = 0;
let intervalId;
function randomText() {
  const str = text
    .split("")
    .map((char, idx) => {
      if (idx < count) {
        return char;
      }
      return characters.split("")[Math.floor(Math.random() * 52)];
    })
    .join("");

  p.textContent = str;
  count += 0.25;

   if (count >= text.length) {
     clearInterval(intervalId); 
   }
}

p.addEventListener("mouseenter", function () {
  count =0;
  
   clearInterval(intervalId); 
   intervalId = setInterval(randomText, 30);
});



