let current = 0;
let slides = document.getElementsByClassName("slide");
let timer = null; 

function showSlide(index) {
  if (!slides.length) return;

  // wrap index
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  // hide all
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // show current
  slides[index].style.display = "block";
  current = index;
}

function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

function plusSlides(n) {
  if (n > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
  resetAuto();
}

function startAuto() {
  timer = setInterval(nextSlide, 4000);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

// run after page loads
document.addEventListener("DOMContentLoaded", () => {
  slides = document.getElementsByClassName("slide");
  showSlide(0);
  startAuto();
});

// document.querySelectorAll(".dropdown").forEach(item => {
//   item.addEventListener("mouseover", () => {
//     document.querySelectorAll(".dropdown-menu").forEach(menu => {
//       menu.style.display = "none";
//     });
//     item.querySelector(".dropdown-menu").style.display = "flex";
//   });

//   item.addEventListener("mouseleave", () => {
//     item.querySelector(".dropdown-menu").style.display = "none";
//   });
// });
