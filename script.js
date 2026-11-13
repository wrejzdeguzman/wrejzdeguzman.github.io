// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Side navigation drawer toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
const backdrop = document.getElementById("navBackdrop");
const closeBtn = document.querySelector(".nav-close");

function setNav(open) {
  nav.classList.toggle("open", open);
  backdrop.classList.toggle("open", open);
  toggle.setAttribute("aria-expanded", open);
}

toggle.addEventListener("click", () => setNav(!nav.classList.contains("open")));
closeBtn.addEventListener("click", () => setNav(false));
backdrop.addEventListener("click", () => setNav(false));
document.addEventListener("keydown", (e) => e.key === "Escape" && setNav(false));
nav.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => setNav(false))
);

// Fade-in sections on scroll
const items = document.querySelectorAll(".heading, .about-grid, .skill-card, .project, .cert, .contact-inner");
items.forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
items.forEach((el) => observer.observe(el));

// Highlight the menu link of the section currently on screen
const navLinks = nav.querySelectorAll("a");
const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute("href")));
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    }
  });
}, { rootMargin: "-45% 0px -50% 0px" });
sections.forEach((s) => s && sectionObserver.observe(s));



// Welcome loading screen
const preloader = document.getElementById("preloader");
if (preloader) {
  window.addEventListener("load", () => {
    setTimeout(() => preloader.classList.add("done"), 1300);
  });
}
