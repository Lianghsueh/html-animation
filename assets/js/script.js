const btn = document.getElementById("showBtn");
const img = document.getElementById("targetImg");
const desc = document.getElementById("description");
const hideBtn = document.getElementById("hideBtn");

btn.addEventListener("click", () => {
  img.classList.remove("hidden");
  desc.classList.remove("hidden");
  btn.classList.add("hidden");
  hideBtn.classList.remove("hidden");

  gsap.fromTo(img, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
  gsap.fromTo(desc, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
});

hideBtn.addEventListener("click", () => {
  gsap.to([img, desc], {
    opacity: 0,
    y: -30,
    duration: 0.5,
    onComplete: () => {
      img.classList.add("hidden");
      desc.classList.add("hidden");
      hideBtn.classList.add("hidden");
      btn.classList.remove("hidden");
    }
  });
});