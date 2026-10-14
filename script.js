// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
}

// Project filters (Projects page)
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project[data-cat]");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    filters.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    projects.forEach((p) => {
      p.hidden = cat !== "all" && p.dataset.cat !== cat;
    });
  });
});

// Footer year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
