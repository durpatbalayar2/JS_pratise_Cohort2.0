let keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
  key.addEventListener("click", function () {
    playSound(key);

    key.classList.add("key-animation");
    setTimeout(() => {
      key.classList.remove("key-animation");
    }, 200);
  });
});

function playSound(key) {
  let num = key.dataset.number;

  let folder = key.classList.contains("white-keys") ? "white-key" : "black-key";

  let audio = new Audio(`./audio/${folder}/${num}.mp3`);
  audio.play();
}



// KEYBOARD CONTROL
document.addEventListener("keydown", function (e) {
  let key = e.key.toLowerCase();

  let keyMap = {
    a: 1,
    s: 2,
    d: 3,
    f: 4,
    g: 5,
    h: 6,
    j: 7,
    w: 22,
    e: 23,
    t: 24,
    y: 25,
    u: 26,
  };

  let num = keyMap[key];
  if (!num) return;

 
  let pianoKey = document.querySelector(`.keys[data-number="${num}"]`);

  if (pianoKey) {
    playSound(pianoKey);

    pianoKey.classList.add("key-animation");
    setTimeout(() => {
      pianoKey.classList.remove("key-animation");
    }, 200);
  }
});


