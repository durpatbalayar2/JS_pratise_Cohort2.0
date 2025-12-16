const images = document.querySelectorAll(".lazy");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;

        console.log("Loading:", img.dataset.src);

        img.src = img.dataset.src;

        img.onload = () => {
          img.classList.add("loaded");
        };

        observer.unobserve(img);
      }
    });
  },
  {
    root: null,
    threshold: 0.3,
  }
);

images.forEach((img) => observer.observe(img));
