let btn = document.querySelector("button");
let h2 = document.querySelector("h2");
let inner = document.querySelector(".outer .inner");

let card = document.querySelector(".card");
let count = 0;

btn.addEventListener("click", function () {
  btn.style.pointerEvents = "none";
  btn.textContent = "Downloading...";
  btn.style.fontSize = "15px";
  btn.style.padding = "10px 10px";

  let rand = 50 + Math.floor(Math.random() * 50);
  console.log(rand)
  let inp = setInterval(() => {
    count++;
    inner.style.width = `${count}%`;
    h2.textContent = `${count}%`;
  }, rand);

  setTimeout(() => {
    clearInterval(inp);
    count = 100;
    btn.textContent = "Downloaded";
    btn.style.opacity = 0.5;
    btn.style.fontSize = "20px";
    btn.style.padding = " 10px 20px";

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        alert("Downloaded Successfully!");
      });
    });

    let p = document.createElement("p");
    p.innerHTML = `Download completed in ${rand / 10}<span>s</span>`;
    card.append(p);
  }, rand*100);
});
