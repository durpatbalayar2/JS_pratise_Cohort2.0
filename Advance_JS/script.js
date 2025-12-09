// Fetch API -Day3

//1.

function fetchData() {
  fetch("https://randomuser.me/api/?results=3")
    .then((raw) => raw.json())
    .then((data) => {
      document.querySelector(".outer-div").innerHTML = "";
      data.results.forEach(function (user) {
        // Parent wrapper where cards will go
        const parent = document.createElement("div");
        parent.className =
          "flex items-center justify-center min-h-screen gap-4";

        //  Create Card
        const card = document.createElement("div");
        card.className =
          "max-w-sm bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col items-center p-6";

        // Image Element
        const img = document.createElement("img");
        img.className = "w-24 h-24 rounded-full mb-4";
        img.src = user.picture.large;
        img.alt = "User Avatar";

        // Title (name)
        const h2 = document.createElement("h2");
        h2.className = "text-xl font-semibold text-white";
        h2.textContent = user.name.first + " " + user.name.last;

        // Gender
        const gender = document.createElement("p");
        gender.className = "text-gray-400 mb-4";
        gender.textContent = user.gender;

        // Button
        const btn = document.createElement("button");
        btn.className =
          "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition";
        btn.textContent = "Follow";

        // Append all into card
        card.appendChild(img);
        card.appendChild(h2);
        card.appendChild(gender);
        card.appendChild(btn);

        // Append card to parent
        parent.appendChild(card);

        // Add parent to outer div in HTML
        document.querySelector(".outer-div").appendChild(parent);
      });
    });
}

fetchData();

let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  fetchData();
});
