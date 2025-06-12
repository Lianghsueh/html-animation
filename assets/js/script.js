const btn = document.getElementById("showBtn");
const img = document.getElementById("targetImg");
btn.addEventListener("click", () =>{
  img.classList.remove("hidden");
  gsap.fromTo(img,
    { opacity: 0, y: -50},
    { opacity: 1, y: 0,duration: 1 }
  );
});
ㄙ