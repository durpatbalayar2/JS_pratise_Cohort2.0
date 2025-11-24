const users = [
  {
    name: "Ava Thompson",
    pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    bio: "UI/UX designer who loves creating minimal and beautiful experiences.",
  },
  {
    name: "Oliver Hayes",
    pic: "https://images.unsplash.com/photo-1557862921-37829c790f19",
    bio: "Frontend developer who enjoys crafting smooth and interactive UI experiences.",
  },
  {
    name: "Sophia Bennett",
    pic: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f",
    bio: "Content creator & social media strategist with a love for storytelling.",
  },
  {
    name: "Noah Mitchell",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Fitness enthusiast and lifestyle blogger sharing wellness tips.",
  },
  {
    name: "Nsabella Reed",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    bio: "Travel photographer capturing moments from around the world.",
  },
  {
    name: "Athan Brooks",
    pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Software engineer & open-source contributor who loves problem solving.",
  },
  {
    name: "Mia Parker",
    pic: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    bio: "Digital marketer helping brands grow through creative campaigns.",
  },
];

function showUsers(arr) {
  arr.forEach(function (user) {
    //outer card div create

    const card = document.createElement("div");
    card.classList.add("card");

    // Image
    const img = document.createElement("img");
    img.src = user.pic;

    img.classList.add("bg-img");

    // Blurred Layer
    const blurLayer = document.createElement("div");
    blurLayer.style.backgroundImage = `url(${user.pic})`;
    blurLayer.classList.add("blurred-layer");

    // create div Content
    const content = document.createElement("div");
    content.classList.add("content");

    // Create h3 and paragraph

    const h3 = document.createElement("h3");
    h3.textContent = user.name;

    const p = document.createElement("p");
    p.textContent = user.bio;

    // Append heading and paragraph to content
    content.appendChild(h3);
    content.appendChild(p);

    // Append all to card
    card.appendChild(img);
    card.appendChild(blurLayer);
    card.appendChild(content);

    // Finally append card to main container

    document.querySelector(".cards").appendChild(card);
  });
}

showUsers(users);

let inp = document.querySelector(".inp");

inp.addEventListener("input", function () {
  let newUsers = users.filter((user) => {
    return user.name.startsWith(inp.value);
  });

  document.querySelector(".cards").innerHTML = "";

  showUsers(newUsers);
});

// Saare user show karaana
//filter karna har baar input karne pe
// show karna filters users
