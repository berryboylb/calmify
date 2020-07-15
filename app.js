// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//   navLinks.classList.toggle("open");
//   links.forEach(link => {
//     link.classList.toggle("fade");
//   });
// });

gsap.registerPlugin(ScrollTrigger);

gsap.from("nav", {duration:1, y: '-70px', ease:'bounce'})
gsap.from('.content1', {duration:1, x: '-100%', ease: 'power2'})
gsap.from('.content2', {duration:1, x: '100%', scale: 2, ease: 'power2'})