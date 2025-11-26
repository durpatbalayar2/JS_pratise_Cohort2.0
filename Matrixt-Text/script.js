const para = document.querySelector("p");
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const text = para.textContent;

para.addEventListener("mouseenter", () => {
  setInterval(() => {
    const str = text
      .split("")
      .map((char, idx) => {
        return characters.split("")[Math.floor(Math.random() * 53)];
      })
      .join("");

    para.textContent = str;
  }, 30);
});
