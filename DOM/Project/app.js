const reelsData = [
  {
    isMuted: true,
    profileImg:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sushila Singh",
    isFollowed: false,
    likes: 54,
    isLiked: true,
    comment: 32,
    share: 12,
    description: "This is a perfect Moment",
    video: "./video/1.mp4",
  },
  {
    isMuted: true,
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
    isMuted: true,
    profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Aisha Khan",
    isFollowed: true,
    likes: 89,
    isLiked: true,
    comment: 25,
    share: 14,
    description: "Chasing dreams ✨",
    video: "./video/2.mp4",
  },
  {
    isMuted: true,
    profileImg: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Manish Verma",
    isFollowed: true,
    likes: 201,
    isLiked: false,
    comment: 78,
    share: 29,
    description: "Life is beautiful 💛",
    video: "./video/3.mp4",
  },
  {
    isMuted: true,
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
    isMuted: true,
    profileImg: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Aman Yadav",
    isFollowed: false,
    likes: 154,
    isLiked: true,
    comment: 48,
    share: 21,
    description: "Work hard, enjoy harder!",
    video: "./video/4.mp4",
  },
  {
    isMuted: true,
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
    isMuted: true,
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
    isMuted: true,
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
    isMuted: true,
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

const allReels = document.querySelector(".all-reels");

function addData() {
  let html = "";
  reelsData.forEach((elem, idx) => {
    html += `
      <div class="reel">
        <video preload="none" playsinline loop ${
          elem.isMuted ? "muted" : ""
        } data-index="${idx}">
          <source data-src="${elem.video}" type="video/mp4">
        </video>

        <div class="mute" data-index="${idx}">
          ${
            elem.isMuted
              ? `<i class="ri-volume-mute-fill"></i>`
              : `<i class="ri-volume-up-fill"></i>`
          }
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${elem.profileImg}" alt="">
            <h4>${elem.name}</h4>
            <button class="follow" data-index="${idx}">
              ${elem.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h3>${elem.description}</h3>
        </div>

        <div class="right">
          <div class="like" data-index="${idx}">
            <h4 class="like-icon icon">
              ${
                elem.isLiked
                  ? `<i class="love ri-heart-3-fill"></i>`
                  : `<i class="ri-heart-3-line"></i>`
              }
            </h4>
            <h6>${elem.likes}</h6>
          </div>

          <div class="comment"><h4><i class="ri-chat-3-line"></i></h4><h6>${
            elem.comment
          }</h6></div>
          <div class="share"><h4><i class="ri-share-forward-line"></i></h4><h6>${
            elem.share
          }</h6></div>
        </div>
      </div>`;
  });

  allReels.innerHTML = html;
  lazyLoadVideos();
}

addData();

// Lazy Load + auto play visible videos

function lazyLoadVideos() {
  const videos = document.querySelectorAll("video");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        const source = video.querySelector("source");

        if (entry.isIntersecting) {
          if (!video.src) {
            video.src = source.dataset.src;
            video.load();
          }
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.6 }
  );

  videos.forEach((video) => observer.observe(video));
}

//Like / Follow / Mute Update Efficiently

allReels.addEventListener("click", (e) => {
  const btn = e.target.closest(".like, .follow, .mute");
  if (!btn) return;

  const idx = btn.dataset.index;

  if (btn.classList.contains("like")) {
    reelsData[idx].isLiked = !reelsData[idx].isLiked;
    reelsData[idx].likes += reelsData[idx].isLiked ? 1 : -1;
  }

  if (btn.classList.contains("follow")) {
    reelsData[idx].isFollowed = !reelsData[idx].isFollowed;
  }

  if (btn.classList.contains("mute")) {
    const video = document.querySelector(`video[data-index="${idx}"]`);
    reelsData[idx].isMuted = !reelsData[idx].isMuted;
    video.muted = reelsData[idx].isMuted;
  }

  addData();
});
