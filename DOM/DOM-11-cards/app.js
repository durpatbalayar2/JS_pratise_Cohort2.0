const users = [
  {
    fullName: "Aarav Mehta",
    image:
      "https://plus.unsplash.com/premium_photo-1661488774517-94ecf6cc58ff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "UX Designer",
    description:
      "Designs intuitive user experiences that feel natural and seamless.",
    tags: ["Figma", "Prototyping", "UI/UX", "Freelancer"],
  },

  {
    fullName: "Emily Carter",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Software Engineer",
    description:
      "Writes scalable code and builds reliable systems that solve real problems.",
    tags: ["React", "Node.js", "TypeScript", "Open Source"],
  },

  {
    fullName: "Lucas Hernandez",
    image:
      "https://plus.unsplash.com/premium_photo-1661420139228-b5f5b9c42cc8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Product Manager",
    description:
      "Transforms ideas into products people love. Believes in data-driven decisions.",
    tags: ["Agile", "Roadmaps", "Research", "Team Leadership"],
  },

  {
    fullName: "Priya Nair",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    profession: "Data Analyst",
    description:
      "Turns raw data into insights that power smarter business decisions.",
    tags: ["Python", "PowerBI", "SQL", "Analytics"],
  },

  {
    fullName: "Rohan Sharma",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    profession: "Backend Developer",
    description:
      "Builds fast and secure APIs with a focus on performance & reliability.",
    tags: ["Node.js", "Express", "MongoDB", "System Design"],
  },
];


let main = document.querySelector("main")

users.forEach((user)=>{
  
  main.innerHTML += `<div class="card">
            <img src="${user.image}" alt="">
            <h3>${user.fullName}</h3>
            <h4>${user.profession}</h4>
            <p>${user.description}</p>

        </div>`;
})