let h1 = document.querySelector("h1");

function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    h1.textContent = " Hii , It's me Dark theme";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    h1.textContent = " Hii , It's me Light theme";
  }
}

setDarkOrLight();

// if (localStorage.getItem("theme")) {
//   document.body.classList.add(localStorage.getItem("theme"));
// } else {
//   setDarkOrLight();
// }

let btn = document.querySelector("#themeBtn");
btn.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    h1.textContent = " Hii , It's me Light theme";

    // localStorage.setItem("theme", "light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    h1.textContent = " Hii , It's me Dark theme";
    // localStorage.setItem("theme", "dark");
  }
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    // if (!localStorage.getItem("theme")) {
    //   setDarkOrLight();
    // }

    setDarkOrLight();
  });


  
