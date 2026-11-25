/* ===================================================
   Sunita Tamang — Portfolio Scripts
   =================================================== */

// 1. Auto-update the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Mobile navigation menu
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

// 3. Highlight the section currently in view in the navigation
const sections = document.querySelectorAll("section[id]");
const links = navLinks.querySelectorAll("a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${entry.target.id}`
        );
      });
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach((section) => observer.observe(section));

// 4. Print / Save portfolio as PDF (Resume section)
document.getElementById("printResume").addEventListener("click", () => {
  window.print();
});
