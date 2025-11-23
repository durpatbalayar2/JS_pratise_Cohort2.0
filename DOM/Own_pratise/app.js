let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#emailError").textContent = "";
  document.querySelector("#passError").textContent = "";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

  let emailAns = emailRegex.test(email.value);
  let passwordAns = passwordRegex.test(password.value);

  let isValid = true;

  if (!emailAns) {
    document.querySelector("#emailError").textContent = "Email is incorrect";
    isValid = false;
  }

  if (!passwordAns) {
    document.querySelector("#passError").textContent = "Password is incorrect";
    isValid = false;
  }

  if (isValid) {
    document.querySelector("#resultMessage").textContent = "Everything is OK";
  }
});
