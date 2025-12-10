let display_box = document.querySelector(".display-box");
let label = document.querySelector(" #label");
let value = document.querySelector(" #value");
let profileImg = document.querySelector(".img-container img");

let btn = document.querySelector(".refreshBtn");
let dataCollect = {};

function getUser() {
  fetch("https://randomuser.me/api/?results=1")
    .then((rawData) => rawData.json())
    .then((data) => {
      let user = data.results[0];

      profileImg.src = user.picture.large;

      dataCollect = {
        name: {
          label: "Hi, my name is",
          value: `${user.name.first} ${user.name.last}`,
        },
        email: {
          label: "My email address is",
          value: user.email,
        },
        birthday: {
          label: "My birthday is",
          value: new Date(user.dob.date).toLocaleDateString(),
        },
        address: {
          label: "My address is",
          value: `${user.location.city}, ${user.location.country}`,
        },
        phone: {
          label: "My phone number is",
          value: user.phone,
        },
        password: {
          label: "My password is",
          value: user.login.password,
        },
      };

      label.textContent = dataCollect.name.label;
      value.textContent = dataCollect.name.value;
    });
}

document.querySelectorAll(".icon-container i").forEach(function (icon) {
  icon.addEventListener("mouseover", function () {
    let type = icon.getAttribute("data-type");
    label.textContent = dataCollect[type].label;
    value.textContent = dataCollect[type].value;
    display_box.classList.add("show");
  });
});

getUser();

btn.addEventListener("click", function () {
  getUser();
});
