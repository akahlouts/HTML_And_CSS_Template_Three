/* Animate Width On Scrolling */

let skillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    console.log("Reached Section Three");
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Increase Numbers On Scrolling
  if (window.scrollY >= statsSection.offsetTop - 270) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

/* Increase Numbers On Scrolling */

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

// window.onscroll = function () {
//   if (window.scrollY >= statsSection.offsetTop - 250) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
