// Personalize these values before publishing your portfolio.
const PROFILE = {
  linkedin: "https://www.linkedin.com/in/f-uddin-75b35218/",
  email: "Foize.Uddin@colorado.edu"
};

const linkedinLink = document.getElementById("linkedinLink");
const emailLink = document.getElementById("emailLink");
linkedinLink.href = https://www.linkedin.com/in/f-uddin-75b35218/;
emailLink.href = `mailto:${Foize.Uddin@colorado.edu}`;

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Statement of Purpose accordion.
const sopItems = [...document.querySelectorAll(".sop-item")];
sopItems.forEach(item => {
  const trigger = item.querySelector(".sop-trigger");
  trigger.addEventListener("click", () => {
    const willOpen = !item.classList.contains("open");
    item.classList.toggle("open", willOpen);
    trigger.setAttribute("aria-expanded", String(willOpen));
    item.querySelector(".sop-plus").textContent = willOpen ? "−" : "+";
    updateExpandButton();
  });
});

const expandButton = document.getElementById("expandButton");
function updateExpandButton() {
  const allOpen = sopItems.every(item => item.classList.contains("open"));
  expandButton.textContent = allOpen ? "Collapse all sections −" : "Expand all sections +";
}
expandButton.addEventListener("click", () => {
  const shouldOpen = !sopItems.every(item => item.classList.contains("open"));
  sopItems.forEach(item => {
    item.classList.toggle("open", shouldOpen);
    item.querySelector(".sop-trigger").setAttribute("aria-expanded", String(shouldOpen));
    item.querySelector(".sop-plus").textContent = shouldOpen ? "−" : "+";
  });
  updateExpandButton();
});

document.getElementById("printButton").addEventListener("click", () => {
  // Open all SOP sections before printing so the complete statement is included.
  sopItems.forEach(item => {
    item.classList.add("open");
    item.querySelector(".sop-trigger").setAttribute("aria-expanded", "true");
    item.querySelector(".sop-plus").textContent = "−";
  });
  updateExpandButton();
  window.print();
});

// Reading progress indicator.
const progressBar = document.getElementById("progressBar");
window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}, { passive: true });
