let box = document.querySelector("#box");

window.addEventListener("mousemove", function (dets) {
//   box.style.left = dets.x + "px";
//   box.style.top = dets.y + "px";

box.style.top = dets.clientY + "px"
box.style.left = dets.clientX + "px"

});
