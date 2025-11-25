const reelsData = [
  {
    profileImg:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sushila Singh",
    isFollowed: false,
    likes: 54,
    isLiked: true,
    comment: 32,
    share: 12,
    description: "This is a perfect Moment",
    video: "https://www.pexels.com/download/video/6235402/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Rohit Sharma",
    isFollowed: true,
    likes: 102,
    isLiked: false,
    comment: 41,
    share: 18,
    description: "Enjoying the sunset vibes 🌅",
    video: "https://www.pexels.com/download/video/4392340/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Aisha Khan",
    isFollowed: true,
    likes: 89,
    isLiked: true,
    comment: 25,
    share: 14,
    description: "Chasing dreams ✨",
    video: "https://www.pexels.com/download/video/8060928/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Manish Verma",
    isFollowed: true,
    likes: 201,
    isLiked: false,
    comment: 78,
    share: 29,
    description: "Life is beautiful 💛",
    video: "https://www.pexels.com/download/video/5548410/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Priya Desai",
    isFollowed: false,
    likes: 64,
    isLiked: true,
    comment: 19,
    share: 7,
    description: "Weekend mood 😍",
    video: "https://www.pexels.com/download/video/8530838/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Aman Yadav",
    isFollowed: false,
    likes: 154,
    isLiked: true,
    comment: 48,
    share: 21,
    description: "Work hard, enjoy harder!",
    video: "https://www.pexels.com/download/video/5717289/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/66.jpg",
    name: "Neha Patil",
    isFollowed: true,
    likes: 310,
    isLiked: false,
    comment: 120,
    share: 50,
    description: "Dancing is my therapy 💃",
    video: "https://www.pexels.com/download/video/5120416/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Suraj Thapa",
    isFollowed: false,
    likes: 98,
    isLiked: true,
    comment: 33,
    share: 10,
    description: "Adventure time! 🏔️",
    video: "https://www.pexels.com/download/video/29660256/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Simran Kaur",
    isFollowed: true,
    likes: 450,
    isLiked: true,
    comment: 140,
    share: 78,
    description: "Love this outfit! 👗",
    video: "https://www.pexels.com/download/video/6194295/",
  },
  {
    profileImg: "https://randomuser.me/api/portraits/men/99.jpg",
    name: "Vijay Rawat",
    isFollowed: false,
    likes: 230,
    isLiked: false,
    comment: 65,
    share: 31,
    description: "Positive vibes only ✨",
    video: "https://www.pexels.com/download/video/7334704/",
  },
];

let reel = "";
reelsData.forEach(function (elem) {
  reel =
    reel +
    ` <div class="card">
          <video
            src=${elem.video}
            autoplay
            loop
            muted
          > </video>

          <div class="bottom">
            <div class="bottom-container">
              <img
                src="${elem.profileImg}"
                alt=""
              />

              <h2>${elem.name}</h2>
              <button>${elem.isFollowed ? "Follow" : "Unfollow"}</button>
            </div>
            <p>${elem.description}</p>
          </div>

          <div class="right">
            <div class="right-icon">
               <i class="${
                 elem.isLiked ? "ri-heart-3-fill liked" : "ri-heart-line"
               }"></i>
              <h3>${elem.likes}</h3>
            </div>
            <div class="right-icon">
              <i class="ri-chat-3-line"></i>
              <h3>${elem.comment}</h3>
            </div>

            <div class="right-icon">
              <i class="ri-share-forward-line"></i>
              <h3>${elem.share}</h3>
            </div>

              <div class="right-icon">
              <i class="ri-more-2-line"></i>
               
            </div>



          </div>
        </div>`;
});

let allReels = document.querySelector("section");

allReels.innerHTML = reel;
